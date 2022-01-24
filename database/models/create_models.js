const {chkConnection} = require('../config/dbConfig');
const {userSync}= require('./user_model')
const {userCategorySync}= require('./user_category_model')
const {productSync}= require('./product_model')
const {productCategorySync}= require('./product_category_model')
const {paymentMethodSync}= require('./payment__method_model')
const {orderSync}= require('./order_model')
const {deliveryMethodSync}= require('./delivery_method_model')

var TF = '';


const createModels =() => {

    chkConnection();
    orderSync(TF);
    userCategorySync(TF);
    userSync(TF);
    productSync(TF);
    productCategorySync(TF);
    paymentMethodSync(TF);
    deliveryMethodSync(TF);
};

module.exports = createModels;