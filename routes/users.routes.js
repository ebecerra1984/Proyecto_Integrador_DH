const express = require("express");
const router = express.Router();
const userUpload = require("../middlewares/userMulterMiddleware");
const validateRegister = require("../middlewares/userValidateMiddleware");

const userCTRL = require("../controllers/user.controller");

// ruteos
router.get("/login", userCTRL.loginForm);
router.post("/login", userCTRL.login);
router.get("/register", userCTRL.register);
router.post("/register", userUpload.single('avatar'), validateRegister, userCTRL.create);
router.get("/profile", userCTRL.profile);
router.get("/logout", userCTRL.logout);

module.exports = router;
