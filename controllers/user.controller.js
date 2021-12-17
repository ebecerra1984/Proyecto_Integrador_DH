const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");



const userCTRL = {
    login: (req, res)=>{
        res.render('./users/login')
    },
    register: (req, res)=>{
        res.render('./users/register')
    },
    create: (req, res) => {
        let msg ='';
        let errors = validationResult(req);
        if (req.body.password != req.body.confPassword){
            msg= 'Las contraseñas son distintas';
        }
        if (errors.isEmpty() && msg==''){
            let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
            let newUser ={
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                codigoPais: req.body.codigoPais,
                telefono: req.body.telefono,
                empresa: req.body.empresa,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            }
            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users));
            res.render('./users/login');
        }else{
            res.render('./users/register',
                {errors: errors.array(),
                msg: msg,
                old: req.body
            });
        }
    }
};

module.exports = userCTRL; 