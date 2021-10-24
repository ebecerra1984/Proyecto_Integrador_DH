const express = require("express");
const app = express();
const path = require("path");

app.use("/static", express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.join(__dirname, "views/productCart.html"));
});

app.listen(3000, () => {
  console.log("el servidor inicio...");
});
