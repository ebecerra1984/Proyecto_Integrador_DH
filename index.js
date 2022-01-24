const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const cookies = require("cookie-parser");

const createModels = require('./database/models/create.models')

const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");
const indexController = require("./controllers/index.controller");
const cartController = require("./controllers/cart.controller");


// ----- Seteo -----
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static("./public"));
app.use(methodOverride("_method"));
app.use(session({ secret: "Droid Store",
  resave: false, saveUninitialized: false }));
app.use(cookies());
app.use(userLoggedMiddleware);

// ----- Conexión y sinconización a base de datos y modelos -----
createModels();

// ----- Uso de rutas -----
app.use("//", indexController.index);
app.use("/aboutUs", indexController.aboutUs);
app.use("/cart", cartController.cart);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// ----- Server -----
app.listen(3000, () => {
  console.log("el servidor inicio...");
});
