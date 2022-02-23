const multer = require("multer");
const path = require("path");

// configuración de Multer para usuarios
const usersStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/users");
  },
  filename: (req, file, cb) => {
    let nombreArchivo =
    "avatar_" + Date.now() + path.extname(file.originalname);
    cb(null, nombreArchivo);
  },
});

// configuración de Multer para productos
const productsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/products");
  },
  filename: (req, file, cb) => {
    let nombreArchivo =
      "product_" + Date.now() + path.extname(file.originalname);
    cb(null, nombreArchivo);
  },
});

const usersUpload = multer({ storage: usersStorage });
const productsUpload = multer({ storage: productsStorage });

module.exports = { usersUpload, productsUpload };
