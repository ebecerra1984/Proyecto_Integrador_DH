// const path = require("path");
const db = require("../../database/models");

const categoriesAPIController = {
  list: (req, res) => {
    db.Product_category.findAll({ include: ["product"] }).then((categories) => {
      let respuesta = {
        meta: {
          status: 200,
          total: categories.length,
          url: "api/categories",
        },

        data: categories.map((category) => {
          return {
            id: category.id,
            name: category.nombre,
            cantProd: category.product.length
          };
        }),
      };
      res.json(respuesta);
    });
  },

  detail: (req, res) => {
    db.Product_category.findByPk(req.params.id, {
      include: ["product"],
    }).then((category) => {
      let respuesta = {
        meta: {
          status: 200,
          total: category.length,
          url: "/api/categories/:id",
        },
        data: category,
      };
      res.json(respuesta);
    });
  },
};

module.exports = categoriesAPIController;
