const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const productosRoute = require("./routes/productos");
const contactoRoute = require("./routes/contacto");

app.use("/api/productos", productosRoute);
app.use("/api/contacto", contactoRoute);

// Servir carpeta pública (opcional) si colocas imágenes aquí
app.use("/public", express.static(path.join(__dirname, "public")));

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));