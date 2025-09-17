const express = require("express");
const router = express.Router();

// POST /api/contacto
router.post("/", (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  // Aquí podrías guardar el mensaje en DB o enviar un correo.
  console.log("📩 Nuevo mensaje de contacto:", { nombre, email, mensaje });

  res.json({ success: true, message: "Mensaje recibido correctamente" });
});

module.exports = router;