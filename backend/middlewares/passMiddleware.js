function passMiddleware(req, res, next) {
    
  
    if (!res.locals.userLogged) {
      return res.redirect('/users/login');
  
    }
  
    next();
  }
  
  module.exports = passMiddleware;