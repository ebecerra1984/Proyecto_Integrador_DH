const multer= require('multer');
const path = require("path");

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

const userUpload = multer({storage});
module.exports = userUpload;