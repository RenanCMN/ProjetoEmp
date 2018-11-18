const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const jwt = require('jwt-simple');

module.exports={

    async login(req,res,next){
        // payload
        let {Email, Senha} = req.body;
        
        await Users.findOne({Email, Senha})
             .then(result => {
                //
                // Gerar token
                //
                if(!result) throw 'Usuario nao localizado.'

                const payload = {id: result._id};

                return res.status(201).send({
                    token: jwt.encode(payload, 'minha-sessao')
                })
             })
             .catch(error => {
                 return res.status(400).send({error});
             })
    },


    async profile(req, res) {
        let user = await req.user;

        return res.status(200).send({user});
    }
}