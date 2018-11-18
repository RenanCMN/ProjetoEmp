const express = require('express');
const routes = express.Router();
const UsersController= require('./controller/UsersController')
const CompanyController= require('./controller/CompanyController')
const VagasController = require('./controller/VagasController')
const Auth = require('./controller/Auth')
//const CheckAuth = require('./middlewares/CheckAuth')
const Authentication = require('./support/Authentication')();

/*routes.use(function(req, res, next) {
    for(var i = 0; i <= 5; i++) {
        console.log("Time: " + Date.now());
        if(i === 5) {
            return next();
        }
    }
});*/

/*
routes.use('/usuario', function(req, res, next) {
    
    console.log(req.headers);

    if(!req.headers.hasOwnProperty('token')) {
        //
        //
        //
        return res.status(401).send({message: 'Voce precisa estar autenticado.'})
    }
    
    // prosseguir no teste
    next();
});
*/
Authentication.init();

routes.use('/api', Authentication.guest());
routes.get('/api/profile', Auth.profile);
//Get Para teste :
routes.get("/api/usuario", UsersController.listUser);
routes.get("/api/empresa",CompanyController.CompanyList);
routes.get("/vagas",VagasController.listVagas)
//Rotas Post
routes.post("/usuario",UsersController.addUser);
routes.post("/empresa",CompanyController.addCompany);
routes.post("/vagas",VagasController.addVagas);
//Rotas PUT

routes.put("/api/usuario/:id",UsersController.updateuser);
routes.put("/api/empresa/:id",CompanyController.updatecompany);
routes.put("/api/vagas/:id",VagasController.updateVagas);
//Rotas Delete
routes.delete("/api/usuario/:id",UsersController.destroy);

routes.delete("/api/empresa/:id",CompanyController.destroy);
routes.delete("/api/vagas/:id",VagasController.destroy)
//Login 
routes.post("/login", Auth.login);

module.exports = routes;