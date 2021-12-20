const express = require("express");
const router = express.Router();
const validateRegister = require("../middlewares/validateMiddleware");
const upload = require("../middlewares/multerMiddleware");

const userCTRL = require("../controllers/user.controller");

// ruteos
router.get("/login", userCTRL.login);
router.get("/register", userCTRL.register);
router.post(
  "/crear",
  upload.single("avatar"),
  validateRegister.validateRegister,
  userCTRL.create
);

module.exports = router;
