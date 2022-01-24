const sqlize = require("../configDB/dbConfig");

const user_categrory = sqlize.define("user_categories", {
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

module.exports = user_categrory;
