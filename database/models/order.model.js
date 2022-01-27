const Sequelize = require("sequelize");
const { sqlize } = require("../config/dbConfig");

//----- definiciñon del modelo -----

const alias = "Order";
const cols = {
  order_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  user_id: { type: Sequelize.INTEGER, allowNull: false },
  product_id: { type: Sequelize.INTEGER, allowNull: false },
  delivery_id: { type: Sequelize.SMALLINT, allowNull: false },
  payment_id: { type: Sequelize.SMALLINT, allowNull: false },
  total_amount: { type: Sequelize.INTEGER, allowNull: false },
  total_qty: { type: Sequelize.INTEGER, allowNull: false },

};
const config = {
  tablename: "orders",
  timestamps: false,
};

const Order = sqlize.define(alias, cols, config);

// ----- Relaciones de la tabla -----
Order.associate = function (models) {
  Order.belongsTo(models.User, {
    as: "User",
    foreignKey: "user_id",
  }),
    Order.belongsTo(models.Delivery_method, {
      as: "Delivery",
      foreignKey: "delivery_id",
    }),
    Order.belongsTo(models.Payment_method, {
      as: "Payment",
      foreignKey: "payment_id",
    }),
    Order.belongsToMany(models.Product, {
      as: "Product",
      through: "orders_products",
      foreignKey: "order_id",
      otherKey: "sku",
      timestamps: false,
    });
};

//----- creacion de la tabla -----
const orderSync = async (switchTF) => {

    try {
      await Order.sync({ force: switchTF });
//      console.log('Creacón de payment_methods exitosa');
    } catch (err) {
        console.log("Error en creacion de 'payment_methods': ", err);
    }
  };


module.exports = { Order, orderSync };
