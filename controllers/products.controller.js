const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsCtrl = {
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

  edit: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDetail", { producto });
  },



  prodCRUD: (req, res) => {
    res.render("prodCRUD");
  },
};

module.exports = productsCtrl;
