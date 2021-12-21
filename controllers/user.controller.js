const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");

const userCTRL = {
  loginForm: (req, res) => {
    res.render("./users/login");
  },

  login: (req, res) => {
    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    let userLogin = users.find((user) => user["email"] == req.body.email);

    if (userLogin) {
      let passwordOk = bcrypt.compareSync(
        req.body.password,
        userLogin.password
      );
      if (passwordOk) {
        delete userLogin.password;
        req.session.userLogged = userLogin;
        res.redirect("/");
      } else {
        let errUserLogin = "La contraseña ingresada no es válida.";
        res.render("./users/login", { errUserLogin });
      }
    } else {
      let errUserLogin = "El email ingresado no está registrado";
      res.render("./users/login", { errUserLogin, old: req.body });
    }
  },

  register: (req, res) => {
    res.render("./users/register");
  },

  create: (req, res) => {
    let errors = validationResult(req);
    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    let userExist = users.find((user) => user["email"] == req.body.email);

    if (userExist) {
      let errUserExist = "Ya existe un usuario con este email";
      res.render("./users/register", { errUserExist, old: req.body });
    } else if (errors.isEmpty()) {
      let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
      let newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        codigoPais: req.body.codigoPais,
        telefono: req.body.telefono,
        empresa: req.body.empresa,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.file.filename,
      };
      users.push(newUser);
      fs.writeFileSync(usersFilePath, JSON.stringify(users));
      res.redirect("./login");
    } else {
      res.render("./users/register", { errors: errors.array(), old: req.body });
    }
  },

  profile: (req, res) => {
    res.render("./users/profile", { user: req.session.userLogged });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("./login");
  },
};

module.exports = userCTRL;
