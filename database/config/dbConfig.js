const { Sequelize } = require("sequelize");

// ----- sequelize config -----
const DBconfig = {
  db: "droidstore_db",
  username: "root",
  password: null,
  host: "localhost",
  dialect: "mysql",
};

const sqlize = new Sequelize(
  DBconfig.db,
  DBconfig.username,
  DBconfig.password,
  { host: DBconfig.host, dialect: DBconfig.dialect }
);

// ----- chequea conexion a base de datos -----
const chkConnection = async () => {
  try {
    await sqlize.authenticate();
    console.log("Conexion a droidstore_db exitosa");
  } catch (error) {
    console.log("No se pudo conectar a droidstore_db, error: ", error);
  }
};

module.exports = { sqlize, chkConnection };
