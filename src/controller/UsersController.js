const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Users = mongoose.model('Users');
const Status = require('../status/status')


module.exports={
    async addUser(req,res){
        try{
            const users = await Users.create(req.body);
            //res.json(users);
            return res.status(200).send({
                message:'Usuario Criado Com sucesso'
            })
        }catch(e){
           return res.status(500).send({
                message: 'Falha Ao Adicionar'
            });
        }
        
    },
    async listUser(req,res){
        try{
            const users = await Users.find();
            // return res.json(users);
            return res.status(200).send({message:'Success in list Users',data:users})
        }catch(e){
            res.status(500).send({
                message: 'Falha Na requisicao',
                data:e
            });
        }

    },
    async updateuser(req,res){
        try{
            const  users = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true})
            // return  res.json(users);
            return res.status(200).send({message:'Sucess'})
        }catch(e){
            return res.status(500).send({message:'Erro Na Requisicao Update'})
        }

    },
    async destroy(req,res){

        try{
            await Users.findByIdAndRemove(req.params.id)
            // return res.send();
            res.status(200).send({message:'Deletado Com sucesso'})
        }catch(e){
            res.status(500).send({message:'Erro Ao deletar'})
        }
            
    },
    async login(req,res) {
        if(!users){
            return res.status(404).send({message:'Nome ou Senha'});
        }
        try{
            await Users.findOne({Email:req.body.Email,Senha:req.body.Senha})
            return res.status(200).send({message:'Logado'});
        }catch(e){
            console.log(err);
            return res.status(500).send();
        }

    }   
}

