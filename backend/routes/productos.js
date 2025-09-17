const express = require("express");
const router = express.Router();
const productos = require("../data/productos.json");

// GET /api/productos
router.get("/", (req, res) => {
  res.json(productos);
});

module.exports = router;