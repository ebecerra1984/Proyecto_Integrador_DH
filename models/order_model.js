const sqlize = require('../configDB/dbConfig');

const order = sqlize.define('orders',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    delivery_id:{
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    payment_id:{
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    total_amount:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    total_qty:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = order;