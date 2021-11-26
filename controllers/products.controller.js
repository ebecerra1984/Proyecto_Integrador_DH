const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");


const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsCtrl = {
  detail: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDetail", { producto });
  },

  all: (req, res) => {
    res.render("prodAll", { products });
  },

  fijos: (req, res) => {
    const robotsFijos = products.filter(
      (producto) => producto.category == "robot-fijo"
    );
    res.render("prodFijos", { robotsFijos });
  },

  moviles: (req, res) => {
    const robotsMoviles = products.filter(
      (producto) => producto.category == "robot-movil"
    );
    res.render("prodMoviles", { robotsMoviles });
  },

  detail: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDetail", { producto });
  },

  edit: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodEdit", { producto });
  },

  create: (req, res) => {
    let producto = {
      id: req.body.sku,
      name: req.body.nombre,
    };
    res.render(producto);
  },

  update: (req, res) => {
    //     idProd = req.params.id;
    //     newProd = {
    //       id: req.body.id,
    //       name: req.body.name,
    //       description: req.body.description,
    //       category: req.body.category,
    //       price: req.body.price,
    //       discount: req.body.discount,
    //       image: Cobot.jpg,
    //     };

    //     products = products.map(function (producto) {
    //       if (producto.id == idProd) {
    //         (producto.name = newProd.name),
    //           (producto.description = newProd.description),
    //           (producto.category = newProd.category),
    //           (producto.price = newProd.price),
    //           (producto.discount = newProd.discount);
    // //        image: Cobot.jpg;
    //         return producto;
    //       } else {
    //         return producto;
    //       }
    //     });
    res.redirect("/");
     idProd = req.params.id;
     const {name, description, category, price, discount} = req.body;
     const newProd =[];

     products = products.map(function (producto) {
       if (producto.id == idProd) {
         producto.name = newProd.name,
         producto.description = newProd.description,
         producto.category = newProd.category,
         producto.price = newProd.price,
         producto.discount = newProd.discount;
         //        image: Cobot.jpg;
         return producto;
       }
     });
//    res.send({producto})
     res.redirect('/')
  },

  detailDelete: (req, res) => {
    idProd = req.params.id;
    producto = products.find(function (product) {
      return product.id == idProd;
    });
    res.render("prodDelete", { producto });
  },

  delete: (req, res) => {
    
    let idProd = req.params.id;
    products = products.filter(product => product.id != idProd) 
    res.send({products})

    
    //let index= products.indexOf(idProd);

    // for (i = 0; i < products.length; i++) {
    //   if (products.id == idProd) {
    //     index = i;
    //   }
    // }
    
    //products.splice(index, 1);

    // console.log('PRODUCTO BORRADO')
    // console.log({products})
<<<<<<< HEAD
    res.redirect("/");
=======
    
    //res.send({products});
>>>>>>> e9cabd8bf7140241890d6a561da22ce8f149cfb8
  },

  prodCRUD: (req, res) => {
    res.render("/prodCRUD");
  },
};

module.exports = productsCtrl;
