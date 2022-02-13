const fs = require("fs");
const path = require("path");
const db = require("../database/models/product.model.new");

const productsFilePath = path.join(__dirname, "../data/products.json");

const indexController = {
  index: (req, res) => {
    // db.Product.findAll().then((products) => {
    //   console.log(products);
    //   // res.render("index", { robotsFijos });
    // });

    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const robotsFijos = products.filter(
      (producto) => producto.category == "fijo"
    );
    const robotsMoviles = products.filter(
      (producto) => producto.category == "movil"
    );
    res.render("index", { robotsFijos, robotsMoviles });
  },

  aboutUs: (req, res) => {
    res.render("aboutUs");
  },
};

module.exports = indexController;
