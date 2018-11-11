const mongoose = require('mongoose');
const VagasSchema = new mongoose.Schema({
    Nome_vaga:{
        type:String,
        required:true
    },
    Descricao:{
        type:String,
        required:true
    },
    Contato_email:{
        type:String,
        required:true

    },
    Requisito:{
        type:String,
        required:true
    },
    FaixaSalario:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});


mongoose.model("Vagas",VagasSchema)
