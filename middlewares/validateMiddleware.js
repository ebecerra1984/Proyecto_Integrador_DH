const path = require("path");
const { check } = require("express-validator");

// Validaciones del registro de usuarios
const validateRegister = [
  check("nombre", "Debes completar el campo Nombre").notEmpty(),
  check("apellido", "Debes completar el campo Apellido").notEmpty(),
  check("email", "Debes ingresar un email válido").isEmail(),
  check("password", "La password debe ser de al menos 6 caracteres").isLength({
    min: 6,
  }),
  check("confPassword").custom((value, { req }) => {
    if (req.body.password != req.body.confPassword) {
      throw new Error("Debes confirmar la misma contraseña ingresada");
    }
    return true;
  }),
  check("avatar").custom((value, { req }) => {
    let file = req.file;
    let validExt = [".png", ".jpg", ".gif"];
    if (!file) {
      throw new Error("Debes seleccionar una imagen de perfil");
    } else {
      if (!validExt.includes(path.extname(file.originalname))) {
        throw new Error(
          `Los archivos permitidos deben ser ${validExt.join(", ")}`
        );
      }
    }
    return true;
  }),
];

// Validaciones del registro de productos
const validateProductCreate = [
  check("nombre", "Debes completar el campo Nombre").notEmpty(),
  check("sku", "Debes completar el campo SKU").notEmpty(),
  check("descripcion", "Debes ingresar una descripcion").notEmpty(),
  check("precio", "Debes ingresar un precio").notEmpty(),
  check("descuento", "Debes ingresar un descuento").notEmpty(),
  check("imagen").custom((value, { req }) => {
    let file = req.file;
    let validExt = [".png", ".jpg", ".gif"];
    if (!file) {
      throw new Error("Debes seleccionar una imagen del producto");
    } else {
      if (!validExt.includes(path.extname(file.originalname))) {
        throw new Error(
          `Los archivos permitidos deben ser ${validExt.join(", ")}`
        );
      }
    }
    return true;
  }),
];

module.exports = { validateRegister, validateProductCreate };
