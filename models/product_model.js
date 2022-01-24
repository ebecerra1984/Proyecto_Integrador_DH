const sqlize = require('../configDB/dbConfig');

const product = sqlize.define('products',{

    sku:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.VARCHAR(50),
        allowNull: false
    },
    descripcion:{
        type: Sequelize.VARCHAR(50),
        allowNull: false
    },
    categoria_id:{
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    precio:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descuento:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imagen:{
        type: Sequelize.VARCHAR(50),
        allowNull: false
    }
});

module.exports = product;