const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");

const indexController = require("./controllers/index.controller");
const cartController = require("./controllers/cart.controller");
const productsCTRL = require("./controllers/products.controller");
const { use } = require("./routes/users.routes");

// Seteo
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static("./public"));
app.use(methodOverride("_method"));

// Uso de rutas
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.use("//", indexController.index);
app.use("/cart", cartController.cart);
// app.use("/prodAll", productsCTRL.all);
// app.use("/prodFijos", productsCTRL.fijos);
// app.use("/prodMoviles", productsCTRL.moviles);
// app.use("/prodDetail/:id", productsCTRL.detail);
// app.use("/prodCRUD", productsCTRL.prodCRUD);

// Server
app.listen(3000, () => {
  console.log("el servidor inicio...");
});
