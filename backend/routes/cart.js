const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart.controller");

router.get("/cart", cartController.cart);

module.exports = router;
