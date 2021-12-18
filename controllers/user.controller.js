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
        let errors = validationResult(req);
        let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        let userExist = users.find(user => user['email'] == req.body.email);
        console.log(errors.array());
       if (userExist) {
//           throw new Error('Ya existe un usuario con este email'),
           let errUserExist = 'Ya existe un usuario con este email';
           res.render('./users/register', {errUserExist, old: req.body })
       };
        if (errors.isEmpty()){
            let newUser ={
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                codigoPais: req.body.codigoPais,
                telefono: req.body.telefono,
                empresa: req.body.empresa,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename
            }
            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users));
            res.render('./users/login');
        }else{
            res.render('./users/register', {errors: errors.array(), old: req.body });
        }
    }
};

module.exports = userCTRL; 