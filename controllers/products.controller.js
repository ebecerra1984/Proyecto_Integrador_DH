const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require("../database/models/product.model");

const productsCtrl = {
  all: (req, res) => {
    db.Product.findAll().then((products) => {
      res.render("prodAll", { products });
    });
  },

  fijos: (req, res) => {
    db.Product.findAll({
      include: [
        {
          model: "Product:-category",
          as: "categorias",
        },
      ],
    }).then((robotsFijos) => {
      console.log(robotsFijos);
      res.render("prodFijos", { robotsFijos });
    });
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
        categoria: parseInt(req.body.categoria),
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

// module.exports = (sequelize, dataTypes) => { (alias producto)
//   let alias = 'Dish';
//   let cols = {
//       id: {
//           type: dataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true
//       },
//       name: dataTypes.STRING,
//       description: dataTypes.STRING,
//       price: dataTypes.DECIMAL,
//       discount: dataTypes.INTEGER,
//       recommended: dataTypes.INTEGER,
//       image: dataTypes.STRING
//   };
//   /*let config = {
//       tableName: 'Papachos',
//       timestamps: false
//   };*/

//   const Dish = sequelize.define(alias, cols)
//   //Aquí creo mi relación entre Platos (Diskes) y Categorias (Categories)
//   Dish.associate = function(models) {
//       Dish.belongsTo(models.Category, {
//               as : 'category',
//               foreignKey: 'categoryId'

//       });

//       //Aquí hago la relación entre mi módelo Dish y mi tabla items  la cual contiene todo lo que el usuario está comprando
//       Dish.hasMany(models.Item, {
//           as: "items",
//           foreignKey: "productId",
//       });

//       /*Dish.belongsTo(models.User, {
//           as: "user",
//           foreignKey: "userId",
//       });*/

//   };
//   return Dish
// }

// module.exports = (sequelize, dataTypes) => { (alias categoria)
//   let alias = 'Category';
//   let cols = {
//       id: {
//           type: dataTypes.INTEGER,
//           primaryKey: true,
//           autoIncrement: true
//       },
//       name: dataTypes.STRING,
//   };
//   /*let config = {
//       tableName: 'categories',
//       timestamps: false
//   };*/
//   const Category = sequelize.define(alias, cols)
//   //Aquí creo la relación con la tabla Dishes  - OJo: Relación de 1 a muchos
//   Category.associate = function(models){
//       Category.hasMany(models.Dish,{
//               as: 'dishes',
//               foreignKey: 'categoryId'})}
//   return Category
// }
