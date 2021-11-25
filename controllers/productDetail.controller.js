const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const prodDetailCtrl = {
    detail: (req, res) => {
      idProd = req.params.id;
		  producto = products.find(function (product) {
			return product.id == idProd;
		});
      res.render("prodDetail",{producto});
    }
  };
  
  module.exports = prodDetailCtrl;

