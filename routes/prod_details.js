const express = require("express");
const router = express.Router();

const productsCTRL = require("../controllers/products.controller");

router.get("prod-detail", productsCTRL.details);

module.exports = router;
