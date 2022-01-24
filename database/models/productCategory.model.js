const sqlize = require("../config/dbConfig");

const product_categrory = sqlize.define("product_categories", {
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

module.exports = product_categrory;
