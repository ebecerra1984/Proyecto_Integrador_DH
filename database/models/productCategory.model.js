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
};

const Product_category = sqlize.define(alias, cols, config);

Product_category.associate = function (models) {
  Product_category.hasMany(models.Product, {
    as: "Product_category",
    foreignKey: "categoria_id",
  });
};

//----- creacion de la tabla -----
const productCategorySync = async (switchTF) => {
  try {
    await Product_category.sync({ force: switchTF });
    //      console.log('Creacón de Product_categories exitosa');
  } catch (err) {
    console.log("Error en creacion de 'Product_categories': ", err);
  }
};

module.exports = { Product_category, productCategorySync };
