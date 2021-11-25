const express = require("express");
const router = express.Router();

const userCTRL = require("../controllers/user.controller");

router.get("login", userCTRL.login);
router.get("register", userCTRL.register);

module.exports = router;
