const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Vagas = mongoose.model('Vagas');

module.exports={
    async addVagas(req,res){
        const vagas = await Vagas.create(req.body);
        return res.json(vagas);
    },
    async listVagas(req,res){
        const vagas = await Vagas.find();
        return res.json(vagas);
    },
    async updateVagas(req,res){
        const  vagas = await Vagas.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return  res.json(vagas);
    },
    async destroy(req,res){
        await Vagas.findByIdAndRemove(req.params.id)

        return res.send();
    }
}