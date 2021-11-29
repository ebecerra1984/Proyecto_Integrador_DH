const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const image = multer({ dest: "/static/images" });

const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsCtrl = {
  all: (req, res) => {
    res.render("prodAll", { products });
  },

  fijos: (req, res) => {
    const robotsFijos = products.filter(
      (producto) => producto.category == "robot-fijo"
    );
    res.render("prodFijos", { robotsFijos });
  },

  moviles: (req, res) => {
    const robotsMoviles = products.filter(
      (producto) => producto.category == "robot-movil"
    );
    res.render("prodMoviles", { robotsMoviles });
  },
  repuestos: (req, res) => {
    const repuestos = products.filter(
      (producto) => producto.category == "repuesto"
    );
    res.render("prodRepuestos", { repuestos });
  },

  detail: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDetail", { producto });
  },

  create: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let producto = {
      id: parseInt(req.body.sku),
      name: req.body.nombre,
      description: req.body.descripcion,
      category: req.body.categoria,
      image: req.body.imagen,
      price: req.body.precio,
      discount: req.body.descuento,
    };
    products.push(producto);
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.render("prodAll", { products });
  },

  edit: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodEdit", { producto });
  },

  update: (req, res) => {
    idProd = req.params.id;
    const { name, description, category, newCategory, price, discount } =
      req.body;
    const newProd = [];

    products.map(function (producto) {
      if (producto.id == idProd) {
        if (newCategory != "Seleccione nueva") {
          producto.category = newCategory;
        } else {
          producto.category = category;
        }
        (producto.name = name),
          (producto.description = description),
          (producto.price = price),
          (producto.discount = discount);
      }
      newProd.push(producto);
    });
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect("/");
  },

  detailDelete: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDelete", { producto });
  },

  delete: (req, res) => {
    let idProd = req.params.id;
    products = products.filter((product) => product.id != idProd);
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect("/");
  },

  prodCRUD: (req, res) => {
    res.render("prodCRUD");
  },
};

module.exports = productsCtrl;
