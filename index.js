const express = require("express");
const app = express();
//const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");
const indexController = require("./controllers/index.controller");
const cartController = require("./controllers/cart.controller");
//const productsCTRL = require("./controllers/products.controller");
//const { use } = require("./routes/users.routes");

// Seteo
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static("./public"));
app.use(methodOverride("_method"));
app.use(
  session({ secret: "Droid Store", resave: false, saveUninitialized: false })
);
app.use(userLoggedMiddleware);

// Uso de rutas
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("//", indexController.index);
app.use("/cart", cartController.cart);

// Server
app.listen(3000, () => {
  console.log("el servidor inicio...");
});
