const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsCtrl = {
<<<<<<< HEAD
  detail: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDetail", { producto });
  },

=======
  all: (req, res) => {
    res.render("prodAll", { products });
  },

  fijos: (req, res) => {
    const robotsFijos = products.filter(producto => producto.category == 'robot-fijo');
	  res.render("prodFijos", { robotsFijos});
  },

  moviles: (req, res) => {
    const robotsMoviles = products.filter(producto => producto.category == 'robot-movil');
    res.render("prodMoviles", { robotsMoviles });
  },

  detail: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDetail", { producto });
  },

>>>>>>> d5db31e05030780774a6d68f2b06a3e2df54b43e
  productCrud: (req, res) => {
    res.render("productCrud");
  },
};

module.exports = productsCtrl;
