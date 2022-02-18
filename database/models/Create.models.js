module.exports = () => {
  // const { chkConnection } = require("../config/dbConfig");
  const { userSync } = require("./User.model");
  // const { userCategorySync } = require("./userCategory.model");
  const { productSync } = require("./Product.model");
  const { productCategorySync } = require("./productCategory.model");
  // const { paymentMethodSync } = require("./paymentMethod.model");
  // const { orderSync } = require("./order.model");
  // const { deliveryMethodSync } = require("./deliveryMethod.model");
  // const { orderProductSync } = require("./orderProduct.model");

  var TF = "";

  const createModels = () => {
    // chkConnection();
    // orderSync(TF);
    // userCategorySync(TF);
    userSync(TF);
    productSync(TF);
    productCategorySync(TF);
    // paymentMethodSync(TF);
    // deliveryMethodSync(TF);
    // orderProductSync(TF);
  };
  return createModels;
};
