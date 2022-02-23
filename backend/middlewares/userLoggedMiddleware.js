
const db = require("../database/models/user.model");

function userLoggedMiddleware(req, res, next) {
  res.locals.logged = false;

  // si existe una cookie busca el usuario del email y lo asiga a session  
  if (req.cookies.userEmail) {

    db.User.findOne({ where: { email: req.cookies.userEmail } }).then((userCooky) => {
      //console.log('**************** userCooky: ', userCooky);
      req.session.userLogged = userCooky[0]


    });
  }

  if (req.session.userLogged) {
    res.locals.logged = true;
    res.locals.userLogged = req.session.userLogged;
    
  }

  next();
}

module.exports = userLoggedMiddleware;
