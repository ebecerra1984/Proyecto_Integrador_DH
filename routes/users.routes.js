const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {check} = require ('express-validator');

// Validaciones del registro de usuarios
const validateRegister = [
    check('nombre').notEmpty().withMessage('Debes completar el campo Nombre'),
    check('apellido').notEmpty().withMessage('Debes completar el campo Apellido'),
    check('email').isEmail().withMessage('Debes ingresar un email válido'),
    check('password', 'La password debe ser de al menos 6 caracteres').isLength({ min: 6}),
    check('confPassword').notEmpty().withMessage('Debes confirmar la contraseña ingresada'),
    check('avatar').custom((value, {req}) => {
        let file = req.file;
        let validExt = ['.png', '.jpg', '.gif'];
        if(!file){
            throw new Error('Debes seleccionar una imagen de perfil')
        }else{
            if(!validExt.includes(path.extname(file.originalname))){
                throw new Error(`Los archivos permitidos deben ser ${validExt.join(', ')}`)
            }            
        }
        return true;
    })
];

// configuración de Multer
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

// ruteos
router.get("/login", userCTRL.login);
router.get("/register", userCTRL.register);
router.post("/crear", upload.single('avatar'),validateRegister, userCTRL.create);

module.exports = router;
