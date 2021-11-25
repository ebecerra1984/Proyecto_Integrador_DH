const express = require("express");
const router = express.Router();

const productsCTRL = require("../controllers/products.controller");

router.get("/prodAll", productsCTRL.all);
router.get("/prodFijos", productsCTRL.fijos);
router.get("/prodMoviles", productsCTRL.moviles);
router.get("/prodDetail/:id", productsCTRL.detail);

router.post("/products/crear", productsCTRL.create);
router.get("/prodCRUD", productsCTRL.prodCRUD);
router.get("/edit/:id", productsCTRL.edit);
router.put("/edit/:id", productsCTRL.update);

router.get("/delete/:id", productsCTRL.detailDelete);
router.delete("/delete/:id", productsCTRL.delete);

module.exports = router;
