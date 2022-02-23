// const path = require("path");
const db = require("../../database/models/index");
//const sequelize = db.sequelize;
// const { Op } = require("sequelize");
// const moment = require("moment");

const usersAPIController = {
  list: (req, res) => {
    db.User.findAll().then((users) => {
      let respuesta = {
        meta: {
          status: 200,
          total: users.length,
          url: "api/users",
        },
        data: users.map((user) => {
          return {
            id: user.id,
            name: user.nombre,
            lastName: user.apellido,
            email: user.email,
            URL: "http://localhost:3000/users/profile",
          };
        }),
      };
      res.json(respuesta);
    });
  },

  detail: (req, res) => {
    db.User.findByPk(req.params.id).then((users) => {
      let respuesta = {
        meta: {
          status: 200,
          url: "/api/users/:id",
        },

        data: users

        // data: users.map((user) => {
        //   return {
        //     id: user.id,
        //     name: user.nombre,
        //     lastName: user.apellido,
        //     email: user.email,
        //     URL: "http://localhost:3000/users/profile",
        //   };
        // }),
      };
      res.json(respuesta);
    });
  },
};

module.exports = usersAPIController;
