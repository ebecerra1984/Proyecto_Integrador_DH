// const path = require("path");
const db = require("../../database/models");

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

  detail: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ["ProductCategory"],
    }).then((product) => {
      let respuesta = {
        meta: {
          status: 200,
          total: product.length,
          url: "/api/product/:id",
        },
        data: product,
      };
      res.json(respuesta);
    });
  },
};

module.exports = productsAPIController;
