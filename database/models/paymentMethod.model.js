const Sequelize =require('sequelize');
const {sqlize} = require('../config/dbConfig');

//----- definiciñon del modelo -----
const alias = 'Payment_method';
const cols= {
    id:{ type: Sequelize.SMALLINT, primaryKey: true, allowNull: false, autoIncrement: true },
        nombre:{ type: Sequelize.STRING(50), allowNull: false}
};
const config = {
    tablename: 'payment_methods',
    timestamps: false
};

const Payment_method = sqlize.define(alias, cols, config);

Payment_method.associate = function(models){
  Payment_method.hasMany (models.Order,{
    as: 'Payment',
    foreignKey: 'delivery_id'
  })
}


//----- creacion de la tabla -----
const paymentMethodSync = async (switchTF) => {
    try {
      await Payment_method.sync({ force: switchTF });
      console.log('Creacón de payment_methods exitosa');
    } catch (err) {
        console.log("Error en creacion de 'payment_methods': ", err);
    }
  };




module.exports ={ Payment_method, paymentMethodSync};