const sqlize = require("../config/dbConfig");

const delivery_method = sqlize.define("delivery_methods", {
  id: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.VARCHAR(50),
    allowNull: false,
  },
});

module.exports = delivery_method;
