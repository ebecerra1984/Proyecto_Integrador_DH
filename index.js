const express = require("express");
const app = express();
const path = require("path");

const indexController = require("./controllers/index.controller");
const cartController = require("./controllers/cart.controller");
const productsCTRL = require("./controllers/products.controller");

const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");

// Seteo
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static("./public"));

// Uso de rutas
app.use("/users", usersRouter);
app.use("/products", productsRouter);



app.use("//", indexController.index);
app.use("/cart", cartController.cart);
// app.use("/prodAll", productsCTRL.all);
// app.use("/prodFijos", productsCTRL.fijos);
// app.use("/prodMoviles", productsCTRL.moviles);
// app.use("/prodDetail/:id", productsCTRL.detail);
app.use("/prodCRUD", productsCTRL.prodCRUD);

// Server
app.listen(3000, () => {
  console.log("el servidor inicio...");
});
