const express = require("express");
const app = express();
const path = require("path");

const userCTRL = require("./controllers/user.controller");
const cartController = require("./controllers/cart.controller");
const indexController = require("./controllers/index.controller");
const prodDetailCtrl = require("./controllers/productDetail.controller");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static("./public"));

app.use("/index", indexController.index);
app.use("/cart", cartController.cart);
app.use("/login", userCTRL.login);
app.use("/register", userCTRL.register);
app.use("/prodDetail", prodDetailCtrl.load);

app.listen(3000, () => {
  console.log("el servidor inicio...");
});
