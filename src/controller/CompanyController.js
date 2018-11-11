const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Company = mongoose.model('Company');

module.exports={
    async addCompany(req,res){
        const company = await Company.create(req.body);
        return res.json(company);
    },
    async CompanyList(req,res){
        const  company = await Company.find();
        return res.json(company);
    },
    async updatecompany(req,res){
        const  company = await Company.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return  res.json(company);
    },
    async destroy(req,res){
        await Company.findByIdAndRemove(req.params.id)

        return res.send();
    }
}