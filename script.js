const listaProductos = document.getElementById("lista-productos");
const carritoBtn = document.getElementById("carrito-btn");
const carritoModal = document.getElementById("carrito-modal");
const cerrarCarrito = document.getElementById("cerrar-carrito");
const carritoLista = document.getElementById("carrito-lista");
const carritoTotal = document.getElementById("carrito-total");
const contador = document.getElementById("contador");
const finalizarCompraBtn = document.getElementById("finalizar-compra");

let carrito = [];

// Cargar productos desde backend
async function cargarProductos() {
  try {
    const res = await fetch("http://localhost:4000/api/productos");
    const productos = await res.json();

    productos.forEach(prod => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="img/${prod.img}" alt="${prod.nombre}" />
        <h3>${prod.nombre}</h3>
        <p>S/ ${prod.precio.toFixed(2)}</p>
        <button onclick="agregarCarrito(${prod.id}, '${prod.nombre}', ${prod.precio})">Añadir al Carrito</button>
      `;
      listaProductos.appendChild(card);
    });
  } catch (err) {
    console.error("No se pudieron cargar los productos. ¿El backend está en http://localhost:4000 ?", err);
    listaProductos.innerHTML = "<p style='grid-column:1/-1; text-align:center; color:#666;'>No se pudieron cargar los productos desde el backend.</p>";
  }
}
cargarProductos();

// Carrito
function agregarCarrito(id, nombre, precio) {
  carrito.push({ id, nombre, precio });
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, i) => {
    total += item.precio;
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} - S/ ${item.precio.toFixed(2)} <button onclick="eliminarDelCarrito(${i})">❌</button>`;
    carritoLista.appendChild(li);
  });
  carritoTotal.textContent = "S/ " + total.toFixed(2);
  contador.textContent = carrito.length;
}

// Modal carrito
carritoBtn.onclick = () => carritoModal.style.display = "flex";
cerrarCarrito.onclick = () => carritoModal.style.display = "none";
window.onclick = (e) => { if (e.target === carritoModal) carritoModal.style.display = "none"; };

// Contacto (envía al backend)
document.getElementById("form-contacto").addEventListener("submit", async e => {
  e.preventDefault();
  const nombre = e.target[0].value;
  const email = e.target[1].value;
  const mensaje = e.target[2].value;

  try {
    const res = await fetch("http://localhost:4000/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, mensaje })
    });
    const data = await res.json();
    alert(data.message || "Enviado correctamente");
    e.target.reset();
  } catch (err) {
    console.error("Error al enviar formulario:", err);
    alert("Error al enviar mensaje. ¿El backend está corriendo?");
  }
});

// Finalizar compra (simulación)
finalizarCompraBtn?.addEventListener("click", () => {
  if (carrito.length === 0) return alert("Tu carrito está vacío.");
  alert("Compra simulada exitosa. Total: " + carrito.reduce((s, i) => s + i.precio, 0).toFixed(2));
  carrito = [];
  actualizarCarrito();
  carritoModal.style.display = "none";
});