const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/static", express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/h", (req, res) => {
  res.sendFile(path.join(__dirname, "views/header.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
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
