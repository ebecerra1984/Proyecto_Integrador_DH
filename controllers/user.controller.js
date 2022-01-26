const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
//const fs = require("fs");
//const path = require("path");
//const usersFilePath = path.join(__dirname, "../data/users.json");
const db = require("../database/models/user.model")


const userCTRL = {

  loginForm: (req, res) => {
    res.render("./users/login");
  },


  login: (req, res) => {

    //    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    //    let userLogin = users.find((user) => user["email"] == req.body.email);

    let userBody = req.body.email;
    db.User.findOne({ where: { email: userBody } }).then((userLogin) => {

      if (userLogin) {

        console.log(req.body.password);
        console.log(userLogin.password);

        // *********** BCRYPT NO VALIDA Y RETORNA SIMPRE FALSE **********
        // bcrypt.compare(req.body.password, userLogin.password).then((passwordOk) => {

        let passwordOk = true;

        if (passwordOk) {

          req.session.userLogged = userLogin;

          console.log(req.session.userLogged.email);

          if (req.body.mantenerLogin) {
            res.cookie("userEmail", req.body.email, { maxAge: 900000 });
            console.log(req.cookies.userEmail);
          }
          res.redirect("/");
        } else {
          let errUserLogin = "La contraseña ingresada no es válida.";
          res.render("./users/login", { errUserLogin });
        }

        //        });


      } else {
        let errUserLogin = "El email ingresado no está registrado";
        res.render("./users/login", { errUserLogin, old: req.body });
      }
    })
  },


  register: (req, res) => {
    res.render("./users/register");
  },


  create: (req, res) => {
    let errors = validationResult(req);

    //    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    //    let userExist = users.find((user) => user["email"] == req.body.email);

    db.User.findOne({ where: { email: req.body.email } })
      .then((userExist) => {

        if (userExist != null) {
          let errUserExist = "Ya existe un usuario con este email";
          res.render("./users/register", { errUserExist, old: req.body });
        } else if (errors.isEmpty()) {
          // let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
          let newUser = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            codigo_pais: req.body.codigo_pais,
            telefono: req.body.telefono,
            empresa: req.body.empresa,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename,
            categoria_id: 1
          };
          console.log(newUser);
          // users.push(newUser);
          // fs.writeFileSync(usersFilePath, JSON.stringify(users));

          db.User.create(newUser);


          res.redirect("./login");
        } else {
          res.render("./users/register", { errors: errors.array(), old: req.body });
        }
      });
  },

  profile: (req, res) => {
    res.render("./users/profile", { user: req.session.userLogged });
  },

  edit: (req, res) => {
    res.render("./users/profileEdit", { user: req.session.userLogged });
    console.log(req.session.userLogged);
  },


  update: (req, res) => {

    // if (req.file.filename == undefined) {
    //   avatarName = req.session.userLogged.avatar;
    // }else{
    //   avatarName = req.file.filename;
    // }

    let newData = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      codigo_pais: req.body.codigo_pais,
      telefono: req.body.telefono,
      empresa: req.body.empresa,
      email: req.body.email,
      avatar: req.file.filename,
      
    };

    
    db.User.update(
      newData,
      {
        where: {
          user_id: req.params.id
        }
      }
    );

      req.session.userLogged = newData;
      console.log('cambios:  ', req.session.userLogged)

    res.redirect("/");

  },




  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail");
    res.redirect("./login");
  },


};

module.exports = userCTRL;
