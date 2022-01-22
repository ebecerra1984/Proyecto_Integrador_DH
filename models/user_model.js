//const Sequelize =require('sequelize');
const sqlize = require('../configDB/dbConfig');

const User = sqlize.define('Users',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.VARCHAR(50),
        allowNull: false
    },
    apellidade:{
        type: Sequelize.VARCHAR(50),
        allowNull: false
    },
    cod_pais:{
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    telefono:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email:{
        type: Sequelize.VARCHAR(50),
        allowNull: false
    },
    password:{
        type: Sequelize.VARCHAR(10),
        allowNull: false
    },
    avatar:{
        type: Sequelize.VARCHAR(50),
        allowNull: false
    },
    categoria_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    empresa:{
        type: Sequelize.VARCHAR(50),
        allowNull: true
    }
});

module.exports = User;