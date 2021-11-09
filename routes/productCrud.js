const express = require("express");
const router = express.Router();

const productCrudCTRL = require("../controllers/productCrud.controller");

router.get("productCrud", productCrudCTRL.productCrud);


module.exports = router;