const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const productsFilePath = path.join(__dirname, "../data/products.json");

const image = multer({ dest: "/static/images/products" });

const productsCtrl = {
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
  repuestos: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const repuestos = products.filter(
      (producto) => producto.category == "repuesto"
    );
    res.render("prodRepuestos", { repuestos });
  },

  detail: (req, res) => {
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDetail", { producto });
  },

  create: (req, res) => {
    let errors = validationResult(req);
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    if (errors.isEmpty()) {
      let newProducto = {
        id: parseInt(req.body.sku),
        name: req.body.nombre,
        description: req.body.descripcion,
        category: req.body.categoria,
        image: req.file.originalname,
        price: req.body.precio,
        discount: req.body.descuento,
      };
      products.push(newProducto);
      fs.writeFileSync(productsFilePath, JSON.stringify(products));
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
    res.redirect("/");
  },

  prodCRUD: (req, res) => {
    res.render("prodCRUD");
  },
};

module.exports = productsCtrl;
