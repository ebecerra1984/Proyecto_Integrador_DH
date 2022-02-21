module.exports = (sequelize, dataTypes) => {
  const alias = "User";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre: { type: dataTypes.STRING(50), allowNull: false },
    apellido: { type: dataTypes.STRING(50), allowNull: false },
    codigo_pais: { type: dataTypes.SMALLINT, allowNull: false },
    telefono: { type: dataTypes.INTEGER, allowNull: false },
    empresa: { type: dataTypes.STRING(50), allowNull: true },
    email: { type: dataTypes.STRING(50), allowNull: false },
    password: { type: dataTypes.STRING(256), allowNull: false },
    avatar: { type: dataTypes.STRING(50), allowNull: false },
    categoria_id: { type: dataTypes.SMALLINT, allowNull: false },
    empresa: { type: dataTypes.STRING(50), allowNull: true },
  };
  const config = {
    tablename: "users",
    timestamps: false,
  };
  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {

    User.belongsTo(models.User_category,{
      as:"UserCategory",
      foreignKey:"categoria_id",
    })
  }

  return User;
};
