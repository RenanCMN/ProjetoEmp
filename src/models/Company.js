const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    Nome_fantasia:{
        type:String,
        required:true
    },
    Email_empresa:{
        type:String,
        required:true
    },
    Senha:{
        type:String,
        required:true

    },
    Cnpj:{
        type:Number,
        required:true,
    },
    Endereco:{
        type:String,
        required:true
    },
    Telefone:{
        type:String,
        required:true
    },
    Uf:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

mongoose.model("Company",CompanySchema)

