const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {check} = require ('express-validator');

// Validaciones
const validateRegister = [
    check('nombre').notEmpty().withMessage('Debes completar el campo Nombre'),
    check('apellido').notEmpty().withMessage('Debes completar el campo Apellido'),
    check('avatar').notEmpty().withMessage('Debes seleccionar una imagen de perfil'),
    check('email').isEmail().withMessage('Debes ingresar un email válido'),
    check('password')
        .notEmpty().withMessage('Debes completar el campo Contraseña')
        .isLength({Min: 6}).withMessage('La password debe ser de al menos 6 caracteres'),
    check('confPassword').notEmpty().withMessage('Debes confirmar la contraseña ingresada'),
];

const storage = multer.diskStorage({
    destination: ( req, file, cb ) => {
        cb(null,'./public/images/users');
    },
    filename: ( req, file, cb ) => {
        let nombreArchivo = 'avatar_'+ Date.now()+ path.extname(file.originalname);
        cb(null, nombreArchivo);
    }
});

const upload = multer({storage});

const userCTRL = require("../controllers/user.controller");

router.get("/login", userCTRL.login);
router.get("/register", userCTRL.register);
router.post("/crear", validateRegister, upload.single('avatar'),  userCTRL.create);

module.exports = router;
