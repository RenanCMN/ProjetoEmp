const express = require('express');
const routes = express.Router();
const UsersController= require('./controller/UsersController')
const CompanyController= require('./controller/CompanyController')

//Get Para teste :
routes.get("/usuario",UsersController.listUser);
routes.get("/empresa",CompanyController.CompanyList);
//Rotas Post
routes.post("/usuario",UsersController.addUser);
routes.post("/empresa",CompanyController.addCompany)
//Rotas PUT
routes.put("/usuario/:id",UsersController.updateuser);
routes.put("/empresa/:id",CompanyController.updatecompany);
//Rotas Delete
routes.delete("/usuario/:id",UsersController.destroy);
routes.delete("/empresa/:id",CompanyController.destroy);

//Login 
routes.post("/login",UsersController.login);
module.exports = routes;