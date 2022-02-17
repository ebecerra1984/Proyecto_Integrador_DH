const Sequelize = require("sequelize");
const { sqlize } = require("../config/dbConfig");

//----- definiciñon del modelo -----
const alias = "Product_category";
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
  tablename: "product_categories",
  timestamps: false,
  underscored: true,
};

const ProductCategory = sqlize.define(alias, cols);

ProductCategory.associate = function (models) {
  ProductCategory.hasMany(models.Product, {
    as: "productos",
    foreignKey: "categoria",
  });
};

//----- creacion de la tabla -----
const productCategorySync = async (switchTF) => {
  try {
    await ProductCategory.sync({ force: switchTF });
  } catch (err) {
    console.log("Error en creacion de 'Product_categories': ", err);
  }
};

module.exports = { ProductCategory, productCategorySync };
