const sqlize = require("../config/dbConfig");

const payment_method = sqlize.define("payment_methods", {
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

module.exports = payment_method;
