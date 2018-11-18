const Authentication = require('../support/Authentication')();

module.exports = ('/api', (req, res, next) => {
    console.log("passou na validaço.")

    //return Authentication.init();

    //Authentication.auth();
    
    next();
})