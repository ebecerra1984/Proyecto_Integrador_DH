const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const image = multer({ dest: "/static/images" });

const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsCtrl = {
  detail: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDetail", { producto });
  },

  all: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("prodAll", { products });
  },

  fijos: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const robotsFijos = products.filter(
      (producto) => producto.category == "robot-fijo"
    );
    res.render("prodFijos", { robotsFijos });
  },

  moviles: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const robotsMoviles = products.filter(
      (producto) => producto.category == "robot-movil"
    );
    res.render("prodMoviles", { robotsMoviles });
  },

  detail: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDetail", { producto });
  },

  edit: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodEdit", { producto });
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

  update: (req, res) => {
    //     idProd = req.params.id;
    //     newProd = {
    //       id: req.body.id,
    //       name: req.body.name,
    //       description: req.body.description,
    //       category: req.body.category,
    //       price: req.body.price,
    //       discount: req.body.discount,
    //       image: Cobot.jpg,
    //     };

    //     products = products.map(function (producto) {
    //       if (producto.id == idProd) {
    //         (producto.name = newProd.name),
    //           (producto.description = newProd.description),
    //           (producto.category = newProd.category),
    //           (producto.price = newProd.price),
    //           (producto.discount = newProd.discount);
    // //        image: Cobot.jpg;
    //         return producto;
    //       } else {
    //         return producto;
    //       }
    //     });
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    idProd = req.params.id;
    const { name, description, category, price, discount } = req.body;
    const newProd = [];
    console.log(req.body);
    products = products.map(function (producto) {
      if (producto.id == idProd) {
        (producto.name = newProd.name),
          (producto.description = newProd.description),
          (producto.category = newProd.category),
          (producto.price = newProd.price),
          (producto.discount = newProd.discount);
        //        image: Cobot.jpg;
        return producto;
      }
    });
    //    res.send({producto})
    res.render("/");
  },

  detailDelete: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDelete", { producto });
  },

  delete: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let idProd = req.params.id;
    products = products.filter((product) => product.id != idProd);
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.render("prodAll", { products });
  },

  prodCRUD: (req, res) => {
    res.render("prodCRUD");
  },
};

module.exports = productsCtrl;
