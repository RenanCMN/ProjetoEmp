const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Users = mongoose.model('Users');

module.exports={
    async addUser(req,res){
        const users = await Users.create(req.body);
        return res.json(users);
    },
    async listUser(req,res){
        const users = await Users.find();
        return res.json(users);
    },
    async updateuser(req,res){
        const  users = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return  res.json(users);
    },
    async destroy(req,res){
        await Users.findByIdAndRemove(req.params.id)

        return res.send();
    }
}