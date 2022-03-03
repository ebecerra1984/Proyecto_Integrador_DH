const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const db = require("../database/models/index");

const userCTRL = {
  loginForm: (req, res) => {
    res.render("./users/login");
  },

  login: (req, res) => {
    let userBody = req.body.email;
    db.User.findOne({ where: { email: userBody } }).then((userLogin) => {
      if (userLogin) {
        bcrypt
          .compare(req.body.password, userLogin.password)
          .then((passwordOk) => {
            if (passwordOk) {
              req.session.userLogged = userLogin;
              if (req.body.mantenerLogin) {
                res.cookie("userEmail", req.body.email, { maxAge: 60000 });

               //console.log('**************** res.cookie: ', req.cookies.userEmail);

              }
              res.redirect("/");
            } else {
              let errUserLogin = "La contraseña ingresada no es válida.";
              res.render("./users/login", { errUserLogin });
            }
          });
      } else {
        let errUserLogin = "El email ingresado no está registrado";
        res.render("./users/login", { errUserLogin, old: req.body });
      }
    });
  },

  register: (req, res) => {
    res.render("./users/register");
  },

  create: (req, res) => {
    let errors = validationResult(req);
    db.User.findOne({ where: { email: req.body.email } }).then((userExist) => {
      if (userExist != null) {
        let errUserExist = "Ya existe un usuario con este email";
        res.render("./users/register", { errUserExist, old: req.body });
      } else if (errors.isEmpty()) {
        let newUser = {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          codigo_pais: req.body.codigo_pais,
          telefono: req.body.telefono,
          empresa: req.body.empresa,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          avatar: req.file.filename,
          categoria_id: 1,
        };

        db.User.create(newUser);

        res.redirect("./login");
      } else {
        res.render("./users/register", {
          errors: errors.array(),
          old: req.body,
        });
      }
    });
  },

  profile: (req, res) => {
    db.User.findByPk(req.session.userLogged.id, { include: [{ association : "UserCategory"}]} )
    .then((user) => {
      //   console.log(user.id)
      res.render("./users/profile", { user });
    });
  },

  edit: (req, res) => {
    db.User.findOne({ where: { id: req.params.id } }).then((user) => {
      //, include: [{ association: 'user_category' }]
      console.log("*****para editar:  ", req.params.id);
      res.render("./users/profileEdit", { user }); //user: req.session.userLogged
    });
  },

  update: (req, res) => {
    let newData = {
      id: req.params.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      codigo_pais: req.body.codigo_pais,
      telefono: req.body.telefono,
      empresa: req.body.empresa,
      email: req.body.email,
      avatar: req.file.filename,
    };

    db.User.update(newData, {
      where: {
        id: req.session.userLogged.id,
      },
    });

    req.session.userLogged = newData;

    res.redirect("/users/profile");
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail");
    res.redirect("./login");
  },
};

module.exports = userCTRL;
