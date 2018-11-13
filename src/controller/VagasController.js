const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Vagas = mongoose.model('Vagas');

module.exports={
    async addVagas(req,res){
        try{
            const vagas = await Vagas.create(req.body);
            // return res.json(vagas);
            res.status(200).send({message:'vaga criada com sucesso  '})
        }catch(e){
            res.status(500).send({message:'erro ao cadastra vaga'})
        }
    },
    async listVagas(req,res){
        try{     
            const vagas = await Vagas.find();
            // return res.json(vagas);
            return res.status(200).send({message:'Listado vagas com sucesso', data:vagas})
        }catch(e){
            return res.status(500).send({message:'Erro ao Listar Vagas'})
        }
    },
    async updateVagas(req,res){
        try{
            const  vagas = await Vagas.findByIdAndUpdate(req.params.id,req.body,{new:true})
            // return  res.json(vagas);
            return res.send(200).send({message:'Alterado Com sucesso'})
        }catch(e){
            return res.status(500).send({message:'Erro Ao Alterar Vaga'})
        }
    },
    async destroy(req,res){
        try{
            await Vagas.findByIdAndRemove(req.params.id)
            return res.status(200).send({message:'Vaga Deletado com sucesso'});
        }catch(e){
            return res.status(500).send({message:'Erro Ao deletar Vaga'})
        }

    }
}