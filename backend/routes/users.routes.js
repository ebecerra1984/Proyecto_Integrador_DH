const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validateMiddleware");
const upload = require("../middlewares/multerMiddleware");

const userCTRL = require("../controllers/user.controller");

// ruteos
router.get("/login", userCTRL.loginForm);
router.post("/login", userCTRL.login);
router.get("/register", userCTRL.register);
router.post("/register",
  upload.usersUpload.single("avatar"),
  validate.validateRegister,
  userCTRL.create
);
router.get("/profile", userCTRL.profile);
router.get("/edit/:id", userCTRL.edit);
router.put("/edit/:id",
  upload.usersUpload.single("avatar"),
  userCTRL.update);
router.get("/logout", userCTRL.logout);


module.exports = router;
