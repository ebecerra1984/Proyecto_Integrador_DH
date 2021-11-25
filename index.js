const express = require("express");
const app = express();
const path = require("path");

const indexController = require("./controllers/index.controller");
const cartController = require("./controllers/cart.controller");
const userCTRL = require("./controllers/user.controller");
const productsCTRL = require("./controllers/products.controller");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static("./public"));

app.use("//", indexController.index);
app.use("/cart", cartController.cart);
app.use("/login", userCTRL.login);
app.use("/register", userCTRL.register);
app.use("/prodDetail/:id", productsCTRL.detail);
app.use("/productCrud", productsCTRL.productCrud);


app.listen(3000, () => {
  console.log("el servidor inicio...");
});

