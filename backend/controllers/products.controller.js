const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models/index");

const productsCtrl = {
  all: (req, res) => {
    db.Product.findAll({ include: [{ association : "ProductCategory"}]})
    .then((products) => {
      res.render("prodAll", { products });
    });
  },

  fijos: (req, res) => {
    db.Product.findAll({
      where: { categoria: 1 },
    }).then((robotsFijos) => {
      res.render("prodFijos", { robotsFijos });
    });
  },

  moviles: (req, res) => {
    db.Product.findAll({
      where: { categoria: 2 },
    }).then((robotsMoviles) => {
      res.render("prodMoviles", { robotsMoviles });
    });
  },

  repuestos: (req, res) => {
    db.Product.findAll({
      where: { categoria: 3 },
    }).then((repuestos) => {
      res.render("prodRepuestos", { repuestos });
    });
  },

  detail: (req, res) => {
    db.Product.findByPk(req.params.id).then((producto) => {
      res.render("prodDetail", { producto });
    });
  },

  create: (req, res) => {
    let errors = validationResult(req);
    console.log(req.body);
    if (errors.isEmpty()) {
      db.Product.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria: parseInt(req.body.categoria),
        imagen: req.file.filename,
        precio: req.body.precio,
        descuento: req.body.descuento,
      }).then(() => {
        res.redirect("prodAll");
      });
    } else {
      res.render("./prodCRUD", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },

  edit: (req, res) => {
    db.Product.findByPk(req.params.id).then((producto) => {
      res.render("prodEdit", { producto });
    });
  },

  update: (req, res) => {
    db.Product.update(
      {
        nombre: req.body.name,
        descripcion: req.body.description,
        categoria: parseInt(req.body.newCategory),
        precio: req.body.price,
        descuento: req.body.discount,
      },
      { where: { id: req.params.id } }
    );
    res.redirect("/");
  },

  detailDelete: (req, res) => {
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