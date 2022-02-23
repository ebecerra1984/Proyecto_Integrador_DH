module.exports = (sequelize, dataTypes) =>{

   const alias = 'User_category';
   
   const cols = {
      id:{
         type: dataTypes.SMALLINT,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
      name: { 
         type: dataTypes.STRING(50),
         allowNull: false
      }
   };
   const config = {
      tableName: 'user_categories',
      timestamps: false,
      underscore: true
   }

   const User_category= sequelize.define(alias, cols, config);

   User_category.associate = function (models) {
      User_category.hasMany(models.User, {
        as: "users",
        foreignKey: "categoria_id"
      });
    }
   return User_category;
}