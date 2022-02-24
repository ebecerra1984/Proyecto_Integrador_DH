const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const cookies = require("cookie-parser");

const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");
const indexController = require("./controllers/index.controller");
const cartController = require("./controllers/cart.controller");

const userAPIRoutes = require("./routes/api/usersAPIRoutes");
const productsAPIRoutes = require("./routes/api/productsAPIRoutes");
const categoriesAPIRoutes = require("./routes/api/categoriesAPIRoutes");


//const createModels = require("./database/models/Create.models");

// ----- Seteo -----
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/static", express.static("./public"));
app.use(methodOverride("_method"));
app.use(
  session({ secret: "Droid Store", resave: false, saveUninitialized: false })
);
app.use(cookies());
app.use(userLoggedMiddleware);

// ----- Conexión y sinconización a base de datos y modelos -----
// createModels();

// ----- Uso de rutas -----
app.use("//", indexController.index);
app.use("/aboutUs", indexController.aboutUs);
app.use("/cart", cartController.cart);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// ----- Uso de rutas APIs -----
app.use("/api/users", userAPIRoutes);
app.use("/api/products", productsAPIRoutes);
app.use("/api/categories", categoriesAPIRoutes);


// ----- Server -----
app.listen(3000, () => {
  console.log("el servidor inicio...");
});
