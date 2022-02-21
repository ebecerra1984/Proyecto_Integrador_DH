module.exports = (sequelize, dataTypes) => {
  const alias = "Product";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre: { type: dataTypes.STRING(50), allowNull: false },
    descripcion: { type: dataTypes.STRING(50), allowNull: false },
    categoria: { type: dataTypes.SMALLINT, allowNull: false },
    precio: { type: dataTypes.FLOAT, allowNull: false },
    descuento: { type: dataTypes.FLOAT, allowNull: false },
    imagen: { type: dataTypes.STRING(50), allowNull: false },
    cantidad: { type: dataTypes.INTEGER, allowNull: true },
  };
  const config = {
    tablename: "products",
    timestamps: false,
    underscored: true,
  };
  const Product = sequelize.define(alias, cols, config);


  Product.associate = function (models) {

    Product.belongsTo(models.Product_category,{
      as:"ProductCategory",
      foreignKey:"categoria",
    })
  }

  return Product;
};
