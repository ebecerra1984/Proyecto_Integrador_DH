module.exports = (sequelize, dataTypes) => {
  const alias = "Product_category";
  const cols = {
    id: {
      type: dataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre: { type: dataTypes.STRING(50), allowNull: false },
  };
  const config = {
    tablename: "product_categories",
    timestamps: false,
    underscored: true,
  };
  const Product_category = sequelize.define(alias, cols, config);

  Product_category.associate = function (models) {
    Product_category.hasMany(models.Product, {
      as: "product",
      foreignKey: "categoria"
    });
  }
  // const productCategorySync = async (switchTF) => {
  //   try {
  //     await ProductCategory.sync({ force: switchTF });
  //   } catch (err) {
  //     console.log("Error en creacion de 'Product_categories': ", err);
  //   }
  // };

  return Product_category;
};
