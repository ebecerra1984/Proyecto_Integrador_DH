const express = require("express");
const router = express.Router();
const validateProductCreate = require("../middlewares/validateMiddleware");
const upload = require("../middlewares/multerMiddleware");
const passMiddleware = require("../middlewares/passMiddleware");

const productsCTRL = require("../controllers/products.controller");

router.get("/prodAll", productsCTRL.all);
router.get("/prodFijos", productsCTRL.fijos);
router.get("/prodMoviles", productsCTRL.moviles);
router.get("/prodRepuestos", productsCTRL.repuestos);
router.get("/prodDetail/:id", productsCTRL.detail);

router.post("/crear",
  upload.productsUpload.single("imagen"),
  validateProductCreate.validateProductCreate,
  productsCTRL.create
);
router.get("/prodCRUD", passMiddleware, productsCTRL.prodCRUD);
router.get("/edit/:id", passMiddleware, productsCTRL.edit);
router.put("/edit/:id", productsCTRL.update);

router.get("/delete/:id", passMiddleware, productsCTRL.detailDelete);
router.delete("/delete/:id", productsCTRL.delete);

module.exports = router;
