const Sequelize = require("sequelize");
const { sqlize } = require("../config/dbConfig");

//----- definiciñon del modelo -----
const alias = "Product";
const cols = {
  sku: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nombre: { type: Sequelize.STRING(50), allowNull: false },
  descripcion: { type: Sequelize.STRING(50), allowNull: false },
  categoria_id: { type: Sequelize.SMALLINT, allowNull: false },
  precio: { type: Sequelize.INTEGER, allowNull: false },
  descuento: { type: Sequelize.INTEGER, allowNull: false },
  imagen: { type: Sequelize.STRING(50), allowNull: false },
};
const config = {
  tablename: "products",
  timestamps: false,
};

const Product = sqlize.define(alias, cols, config);

//----- creacion de la tabla -----
const productSync = async (switchTF) => {
  try {
    await Product.sync({ force: switchTF });
    console.log("Creacón de Products exitosa");
  } catch (err) {
    console.log("Error en creacion de 'Products': ", err);
  }
};

module.exports = { Product, productSync };
