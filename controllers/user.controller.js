const userCTRL = {
    login: (req, res)=>{
        res.render('./user/login')
    },
    register: (req, res)=>{
        res.render('./user/register')
    }
};

module.exports = userCTRL; 