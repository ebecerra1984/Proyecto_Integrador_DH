const Sequelize = require("sequelize");
const { sqlize } = require("../config/dbConfig");

//----- definiciñon del modelo -----
const alias = "User";
const cols = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nombre: { type: Sequelize.STRING(50), allowNull: false },
  apellido: { type: Sequelize.STRING(50), allowNull: false },
  cod_pais: { type: Sequelize.SMALLINT, allowNull: false },
  telefono: { type: Sequelize.INTEGER, allowNull: false },
  email: { type: Sequelize.STRING(50), allowNull: false },
  password: { type: Sequelize.STRING(50), allowNull: false },
  avatar: { type: Sequelize.STRING(50), allowNull: false },
  categoria_id: { type: Sequelize.SMALLINT, allowNull: false },
  empresa: { type: Sequelize.STRING(50), allowNull: true },
};
const config = {
  tablename: "users",
  timestamps: false,
};

const User = sqlize.define(alias, cols, config);

// ----- Relaciones de la tabla -----
User.associate = function (models) {
  User.belongsTo(models.User_category, {
    as: "User_category",
    foreignKey: "categoria_id",
  }),
    User.hasMany(models.Order, {
      as: "User",
      foreignKey: "user_id",
    });
};

//----- creacion de la tabla -----
const userSync = async (switchTF) => {
  try {
    await User.sync({ force: switchTF });
    console.log("Creacón de Users exitosa");
  } catch (err) {
    console.log("Error en creacion de 'Users': ", err);
  }
};

module.exports = { User, userSync };
