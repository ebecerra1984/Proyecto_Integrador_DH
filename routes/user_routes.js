const express = require("express");
const router = express.Router();

const userCTRL = require("../controllers/user.controller");

router.get("login", userCTRL.login);
router.ger("register", userCTRL.register);

module.exports = router;
