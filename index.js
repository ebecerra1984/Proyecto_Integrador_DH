const express = require("express");
const app = express();
const path = require("path");

app.use("/static", express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productCart.html"));
});
app.get("/prod-detail", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail.html"));
});
app.get("/cobot", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail-Cobot.html"));
});
app.get("/HD1500", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail-HD1500.html"));
});
app.get("/i4", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail-i4.html"));
});
app.get("/LD90", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail-LD90.html"));
});
app.get("/LD90B", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail-LD90Black.html"));
});
app.get("/LD250", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail-LD250.html"));
});
app.get("/Quattro", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail-Quattro.html"));
});
app.get("/Viper", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productDetail-Viper.html"));
});
app.listen(3000, () => {
  console.log("el servidor inicio...");
});
