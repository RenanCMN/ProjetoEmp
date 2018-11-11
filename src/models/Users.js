const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    Nome:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Senha:{
        type:String,
        required:true

    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});



mongoose.model("Users",UsersSchema)
