const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index.controller");

router.get("/", indexController.about);
router.get("/aboutUs", indexController.aboutUs);

module.exports = router;
