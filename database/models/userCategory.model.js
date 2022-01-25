const Sequelize = require("sequelize");
const { sqlize } = require("../config/dbConfig");

//----- definiciñon del modelo -----
const alias = "User_category";
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
  tablename: "user_categories",
  timestamps: false,
};

const User_category = sqlize.define(alias, cols, config);


// ----- Relaciones de la tabla -----
User_category.associate = function(models){
  User_category.hasMany (models.User,{
    as: 'User_category',
    foreignKey: 'categoria_id'
  })
}


//----- creacion de la tabla -----
const userCategorySync = async (switchTF) => {
  try {
    await User_category.sync({ force: switchTF });
    console.log("Creacón de Users_categories exitosa");
  } catch (err) {
    console.log("Error en creacion de 'Users_categories': ", err);
  }
};

module.exports = { User_category, userCategorySync };
