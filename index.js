const express = require("express");
const app = express();
const path = require("path");

const userCTRL= require('./controllers/user_controllers');

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static("./public"));


app.use("/login", userCTRL.login);
app.use("/register", userCTRL.register);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/cart", (req, res) => {
  res.render("cart");
});
app.get("/prod-detail", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail.html"));
});

/*ruta parametrizada de prueba Gerardo*/
app.get("/productos/:id", function (req, res) {
  let idProducto = req.params.id;
  res.sendFile(
    path.join(__dirname, "views/productDetail-" + idProducto + ".html")
  );
});
/*fin ruta parametrizada de prueba para detalles de producto*/

app.listen(3000, () => {
  console.log("el servidor inicio...");
});
