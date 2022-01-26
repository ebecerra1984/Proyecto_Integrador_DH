const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models/product.model");

const image = multer({ dest: "/static/images/products" });

const productsCtrl = {
  all: (req, res) => {
    db.Product.findAll().then((products) => {
      res.render("prodAll", { products });
    });
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

  repuestos: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const repuestos = products.filter(
      (producto) => producto.category == "repuesto"
    );
    res.render("prodRepuestos", { repuestos });
  },

  detail: (req, res) => {
    db.Product.findByPk(req.params.id).then((producto) => {
      res.render("prodDetail", { producto });
    });
  },

  create: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Product.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria: parseInt(req.body.categoria),
        imagen: req.file.filename,
        precio: req.body.precio,
        descuento: req.body.descuento,
      });
      res.redirect("prodAll");
    } else {
      res.render("./prodCRUD", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },

  edit: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodEdit", { producto });
  },

  update: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
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
    const idProd = req.params.id;
    db.Product.findByPk(req.params.id).then((producto) => {
      res.render("prodDelete", { producto });
    });
  },

  delete: (req, res) => {
    const idProd = req.params.id;
    db.Product.destroy({
      where: { id: idProd },
    });
    res.redirect("/");
  },

  prodCRUD: (req, res) => {
    res.render("prodCRUD");
  },
};

module.exports = productsCtrl;
