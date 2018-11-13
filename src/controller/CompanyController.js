const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Company = mongoose.model('Company');

module.exports={
    async addCompany(req,res){
        try{
            const company = await Company.create(req.body);
            return res.status(200).send({message:'Cadastro de empresa com sucesso'})
        }catch(e){
            return  res.status(500).send({message : 'erro ao cadastra empresa'})
        }
    },
    async CompanyList(req,res){
        try{
            const  company = await Company.find();
            return res.status(200).send({message:'Listagem com sucesso', data:company})
        }catch(e){
            return res.status(500).send({message:'errp ao lista empresa'})
        }
    },
    async updatecompany(req,res){
        try{
            const  company = await Company.findByIdAndUpdate(req.params.id,req.body,{new:true})
            return res.status(200).send({message:'Dados de empresa alterado com sucesso'})
        }catch(e){
            return res.status(500).send({message:'erro ao alterar dados empresa'})
        }
    },
    async destroy(req,res){
        try{
            await Company.findByIdAndRemove(req.params.id)
            return res.status(200).send({message:'Empresa Deletada com sucesso'})            
        }catch(e){
            return res.status(500).send({message:'Erro ao deletar empresa'})
        }

    }
}