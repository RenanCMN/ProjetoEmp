const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Users = mongoose.model('Users');
var validator = require('validator');


module.exports={
    async addUser(req,res){

        try{

            // var check = validator.isEmail(req.body.Email);
            // var checkInNome = validator.isByteLength(
            //                   req.body.Nome,{
            //                     min:2,
            //                     max:100})
            // var checkInSenha = validator
            //                   .isByteLength(req.body.Senha,{
            //                         min:8,
            //                         max:100
            //                   })

            // if(!check) throw 'email Invalido';
            // if(!checkInNome) throw 'Nome Invalido';
            // if(!checkInSenha) throw 'Senha Invalida minimo 8 caracter';

            const users = await Users.create(req.body);
            return res.status(200).send({
                message:'Usuario Criado Com sucesso'
            })
        }catch(e){
           console.log(e);
           return res.status(500).send({
                message: e
            });
        }
        
    },
    async listUser(req,res){
        try{
            const users = await Users.find();
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
            var check = validator.isEmail(req.body.Email);
            var checkInNome = validator.isByteLength(
                              req.body.Nome,{
                                min:2,
                                max:100})
            var checkInSenha = validator
                              .isByteLength(req.body.Nome,{
                                    min:8,
                                    max:100
                              })

            if(!check) throw 'email Invalido';
            if(!checkInNome) throw 'Nome Invalido';
            if(!checkInSenha) throw 'Senha Invalida minimo 8 caracter';
            
            const  users = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true})
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
            
    } 
}

