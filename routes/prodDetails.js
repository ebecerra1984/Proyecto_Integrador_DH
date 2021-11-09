const express = require("express");
const router = express.Router();

const prodDetailCtrl = require("../controllers/productDetail.controller");

router.get("prodDetail", prodDetailCtrl.load);

module.exports = router;
