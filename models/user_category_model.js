const sqlize = require('../configDB/dbConfig');

const User_categrory = sqlize.define('User_categories',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.VARCHAR(50),
        allowNull: false
    }
});

module.exports = User_categrory;