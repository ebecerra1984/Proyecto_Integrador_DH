const Sequelize = require("sequelize");
const { sqlize } = require("../config/dbConfig");

//----- definiciñon del modelo -----
const alias = "Delivery_method";
const cols = {
  id: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nombre: { type: Sequelize.STRING(50), allowNull: false },
};
const config = {
  tablename: "delivery_methods",
  timestamps: false,
};

const Delivery_method = sqlize.define(alias, cols, config);

Delivery_method.associate = function (models) {
  Delivery_method.hasMany(models.Order, {
    as: "Delivery",
    foreignKey: "delivery_id",
  });
};

//----- creacion de la tabla -----
const deliveryMethodSync = async (switchTF) => {
  try {
    await Delivery_method.sync({ force: switchTF });
    //      console.log('Creacón de delivery_methods exitosa');
  } catch (err) {
    console.log("Error en creacion de 'delivery_methods': ", err);
  }
};

module.exports = { Delivery_method, deliveryMethodSync };
