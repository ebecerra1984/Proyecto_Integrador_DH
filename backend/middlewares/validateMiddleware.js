const path = require("path");
const { check } = require("express-validator");

// Validaciones del registro de usuarios
const validateRegister = [
  check("nombre", "El nombre debe tener al menos 2 caracteres").isLength({ min: 2 }),
  check("apellido", "El apellido debe tener al menos 2 caracteres").isLength({ min: 2 }),
  check("email", "Debes ingresar un email válido").isEmail(),
  check("password", "La password debe tener al menos 8 caracteres").isLength({
    min: 8,
  }),
  check("confPassword").custom((value, { req }) => {
    if (req.body.password != req.body.confPassword) {
      throw new Error("Debes confirmar la misma contraseña ingresada");
    }
    return true;
  }),
  check("avatar").custom((value, { req }) => {
    let file = req.file;
    let validExt = [".png", ".jpg", "jpeg", ".gif"];
    if (!file) {
      throw new Error("Debes seleccionar una imagen de perfil");
    } else {
      if (!validExt.includes(path.extname(file.originalname))) {
        throw new Error(
          `Los archivos permitidos son ${validExt.join(", ")}`
        );
      }
    }
    return true;
  }),
];

// Validaciones del registro de productos
const validateProductCreate = [
  check("nombre", "El nombre debe tener al menos 5 caracteres").isLength({ min: 5 }),
  // check("sku", "Debes completar el campo SKU").notEmpty(),
  check("descripcion", "El descripción debe tener al menos 20 caracteres").isLength({ min: 20 }),
  check("precio", "Debes ingresar un precio").notEmpty(),
  check("descuento", "Debes ingresar un descuento").notEmpty(),
  check("imagen").custom((value, { req }) => {
    let file = req.file;
    let validExt = [".png", ".jpg", "jpeg", ".gif"];
    if (!file) {
      throw new Error("Debes seleccionar una imagen del producto");
    } else {
      if (!validExt.includes(path.extname(file.originalname))) {
        throw new Error(
          `Los archivos permitidos son ${validExt.join(", ")}`
        );
      }
    }
    return true;
  }),
];

module.exports = { validateRegister, validateProductCreate };
