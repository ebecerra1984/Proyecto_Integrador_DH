const Sequelize =require('sequelize');
const {sqlize} = require('../config/dbConfig');

//----- definiciñon del modelo -----
const alias = 'Order_product';
const cols = {
    id:{ type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    order_id:{ type: Sequelize.INTEGER,  allowNull: false },
    sku:{ type: Sequelize.INTEGER,  allowNull: false }
};
const config = {
    tablename: 'orders_products',
    timestamps: false
};

const Order_product = sqlize.define(alias, cols, config);


// ----- Relaciones de la tabla -----



//----- creacion de la tabla -----
const orderProductSync = async (switchTF) => {
    try {
      await Order_product.sync({ force: switchTF });
//      console.log("Creacón de 'orders_products' exitosa");
    } catch (err) {
        console.log("Error en creacion de 'Users_categories': ", err);
    }
  };
    


module.exports ={ Order_product, orderProductSync };