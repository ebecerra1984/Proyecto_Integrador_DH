module.exports = (sequelize, dataTypes) => {
  const alias = "Product_categories";
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
  return Product_category;
};
