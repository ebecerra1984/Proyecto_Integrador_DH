const {validationResult} = require('express-validator');


const userCTRL = {
    login: (req, res)=>{
        res.render('./users/login')
    },
    register: (req, res)=>{
        res.render('./users/register')
    },
    create: (req, res) => {
        // let errors = validationResult(req);
        // return res.send({
        //     body: req.body,
        //     file: req.file,
        //     errors
        // })
        
        let msg ='';
        let errors = validationResult(req);
        if (req.body.password != req.body.confPassword){
            msg= 'Las contraseñas son distintas';
        }
         if (errors.isEmpty() && msg==''){
            res.render('./users/login');
        }else{
            res.render('./users/register',
                {errors: errors.array(),
                msg: msg,
                bodyData: req.body // ------ llega a la vista como un array vacío ¿? ------
            });
        }

    }
};

module.exports = userCTRL; 