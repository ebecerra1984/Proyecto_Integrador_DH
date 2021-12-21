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
  upload.usersUpload.single("avatar"),
  validateRegister.validateRegister,
  userCTRL.create
);
router.post(
  "/register",
  upload.userUpload.single("avatar"),
  validateRegister,
  userCTRL.create
);

module.exports = router;
