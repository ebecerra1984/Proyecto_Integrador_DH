const express = require("express");
const router = express.Router();

const productsCTRL = require("../controllers/products.controller");

router.get("/prodAll", productsCTRL.all);
router.get("/prodFijos", productsCTRL.fijos);
router.get("/prodMoviles", productsCTRL.moviles);
router.get("/prodDetail/:id", productsCTRL.detail);

router.post("/products/crear", productsCTRL.create);
router.get("/prodCRUD", productsCTRL.prodCRUD);

module.exports = router;
