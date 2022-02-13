const Sequelize = require("sequelize");
const { sqlize } = require("../config/dbConfig");

//----- definiciñon del modelo -----
const alias = "Product";
const cols = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nombre: { type: Sequelize.STRING(50), allowNull: false },
  descripcion: { type: Sequelize.STRING(50), allowNull: false },
  categoria: { type: Sequelize.SMALLINT, allowNull: false },
  precio: { type: Sequelize.INTEGER, allowNull: false },
  descuento: { type: Sequelize.INTEGER, allowNull: false },
  imagen: { type: Sequelize.STRING(50), allowNull: false },
};
const config = {
  tablename: "products",
  timestamps: false,
  underscored: true,
};

const Product = sqlize.define(alias, cols, config);

// ----- Relaciones de la tabla -----
Product.associate = function (models) {
  Product.belongsTo(models.Product_category, {
    as: "categorias",
    foreignKey: "categoria",
    tagetKey: "id",
  });
};
// Product.belongsToMany(models.Order, {
//   as: "Order",
//   through: "orders_products",
//   foreignKey: "sku",
//   otherKey: "order_id",
//   timestamps: false,
// });

//----- creacion de la tabla -----
const productSync = async (switchTF) => {
  try {
    await Product.sync({ force: switchTF });
  } catch (err) {
    console.log("Error en creacion de 'Products': ", err);
  }
};

module.exports = { Product, productSync };
