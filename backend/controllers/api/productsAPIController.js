// const path = require("path");
const db = require("../../database/models");
const sequelize= require('sequelize')

const productsAPIController = {

  list: (req, res) => {
    db.Product.findAll({ include: ["ProductCategory"] }).then((products) => {
      let respuesta = {
        meta: {
          status: 200,
          total: products.length,
          url: "api/products",
        },

        data: products.map((product) => {
          return {
            id: product.id,
            name: product.nombre,
            description: product.descripcion,
            category: product.ProductCategory.nombre,
            stock: product.cantidad,
            URL: 'http://localhost:3000/static/images/products/'+product.imagen
          };
        }),
      };
      res.json(respuesta);
    });
  },



  listByCategory: (req, res) => {
    db.Product.findAll({ include: [ "ProductCategory"] }).then((products) => {
      let respuesta = {
        meta: {
          status: 200,
          total: products.length,
          url: "api/products/prod/:id",
        },

        data: products.filter((product=> product.ProductCategory.id == req.params.id))  
      
      };
      res.json(respuesta);
    });
  },

  totalByCategory: (req, res) => {
    db.Product.findAll({ include: ["ProductCategory"] }).then((products) => {
      
      let catsInDb = products.map((prods) => {
        return {
          CatName:prods.ProductCategory.nombre
        }
      })      
       res.json(catsInDb);

    });
  },
  
  detail: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ["ProductCategory"],
    }).then((product) => {
      let respuesta = {
        meta: {
          status: 200,
          
          url: "/api/products/:id",
        },
        data: product,
      };
      res.json(respuesta);
    });
  },
};

module.exports = productsAPIController;
