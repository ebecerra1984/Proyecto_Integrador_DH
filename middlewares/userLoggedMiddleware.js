const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

function userLoggedMiddleware(req, res, next) {
  res.locals.logged = false;
  
// si existe una cookie busca el usuario del email y lo asiga a session  
  if(req.cookies.userEmail){
    req.session.userLogged = users.find((user) => user["email"] == req.cookies.userEmail);
  }
  
  if (req.session.userLogged) {
    res.locals.logged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMiddleware;
