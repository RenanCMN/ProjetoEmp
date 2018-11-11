const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const  Users = require('../models/Users')

module.exports={    
    async Login(req,res){
        const logins  = await(req.body)        
        return res.json(logins);

    }
}