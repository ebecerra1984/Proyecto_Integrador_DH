const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const dbTodos = require("../database/models/product.model");
const dbFijos = require("../database/models/productCategory.model");

const productsCtrl = {
  all: (req, res) => {
    dbTodos.Product.findAll().then((products) => {
      res.render("prodAll", { products });
    });
  },

  fijos: (req, res) => {
    dbFijos.Product_category.findAll({
      where: {
        nombre: "Fijo",
      },
    }).then((robotsFijos) => {
      console.log(robotsFijos);
      res.render("prodFijos", { robotsFijos });
    });
    // let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    // const robotsFijos = products.filter(
    //   (producto) => producto.category == "robot-fijo"
    // );
    // res.render("prodFijos", { robotsFijos });
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
    dbTodos.Product.findByPk(req.params.id).then((producto) => {
      res.render("prodDetail", { producto });
    });
  },

  create: (req, res) => {
    let errors = validationResult(req);
    console.log(req.body);
    if (errors.isEmpty()) {
      dbTodos.Product.create({
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
    dbTodos.Product.findByPk(req.params.id).then((producto) => {
      res.render("prodEdit", { producto });
    });
  },

  update: (req, res) => {
    dbTodos.Product.update(
      {
        nombre: req.body.name,
        descripcion: req.body.description,
        categoria: parseInt(req.body.categoria),
        precio: req.body.price,
        descuento: req.body.discount,
      },
      { where: { id: req.params.id } }
    );
    res.redirect("/");
  },

  detailDelete: (req, res) => {
    dbTodos.Product.findByPk(req.params.id).then((producto) => {
      res.render("prodDelete", { producto });
    });
  },

  delete: (req, res) => {
    const idProd = req.params.id;
    dbTodos.Product.destroy({
      where: { id: idProd },
    });
    res.redirect("/");
  },

  prodCRUD: (req, res) => {
    res.render("prodCRUD");
  },
};

module.exports = productsCtrl;
