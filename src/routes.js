const express = require('express');
const routes = express.Router();
const UsersController= require('./controller/UsersController')
const CompanyController= require('./controller/CompanyController')
const VagasController = require('./controller/VagasController')
//Get Para teste :
routes.get("/usuario",UsersController.listUser);
routes.get("/empresa",CompanyController.CompanyList);
routes.get("/vagas",VagasController.listVagas)
//Rotas Post
routes.post("/usuario",UsersController.addUser);
routes.post("/empresa",CompanyController.addCompany);
routes.post("/vagas",VagasController.addVagas);
//Rotas PUT
routes.put("/usuario/:id",UsersController.updateuser);
routes.put("/empresa/:id",CompanyController.updatecompany);
routes.put("/vagas/:id",VagasController.updateVagas);
//Rotas Delete
routes.delete("/usuario/:id",UsersController.destroy);

routes.delete("/empresa/:id",CompanyController.destroy);
routes.delete("/vagas/:id",VagasController.destroy)
//Login 
routes.post("/login",UsersController.login);
module.exports = routes;