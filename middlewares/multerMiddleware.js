const multer = require("multer");

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

const productsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/products");
  },
  filename: (req, file, cb) => {
    let nombreArchivo =
      "avatar_" + Date.now() + path.extname(file.originalname);
    cb(null, nombreArchivo);
  },
});

const usersUpload = multer({ usersStorage });
const productsUpload = multer({ productsStorage });

module.exports = { usersUpload, productsUpload };
