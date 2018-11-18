const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Vagas = mongoose.model('Vagas');
const validator = require('validator');
module.exports={
    async addVagas(req,res){
        try{
          /*  var check = validator
            .isByteLength(req.body.Nome_Vaga,{
                min:1,
                max:100
            });
            var checkInDescricao = validator
            .isByteLength(
                req.body.Descricao,{
                    min:2,
                    max:200
            })
            var checkInEmail = validator.isEmail(req.body.Contato_email)
            var checkInRequisito = validator
            .isByteLength(req.body.Requisito,{
                min:5,
                max:200
            })
           var checkInFxSalario = validator.isNumeric(req.body.FaixaSalario,{no_symbols:true})
           var checkInPreenchida = validator.isBoolean(req.body.Preenchida)

            if(!check) throw 'Nome De vaga deve ter mais de 1 caracter';
            if(!checkInDescricao) throw 'Descricao De vaga deve ter mais de 1 caracter';
            if(!checkInEmail) throw 'Email Invalido';
            if(!checkInRequisito) throw 'Requisito Deve Ser Preenchido';
            if(!checkInFxSalario) throw 'Deve ser informado valores com numeros reais : 250.00';
            if(!checkInPreenchida) throw 'Opcao deve estar Nao preenchida para aparecer na lista';
            */
            const vagas = await Vagas.create(req.body);
            return res.status(200).send({message:'vaga criada com sucesso'})
        }catch(e){
           console.log(e);
           return res.status(500).send({message:'erro ao cadastra vaga', data:e})
        }
    },
    async listVagas(req,res){
        try{     
            const vagas = await Vagas.find();
            return res.status(200).send({message:'Listado vagas com sucesso',data:vagas})
        }catch(e){
            return res.status(500).send({message:'Erro ao Listar Vagas'})
        }
    },
    async updateVagas(req,res){
        try{
          /*  var check = validator
            .isByteLength(req.body.Nome_Vaga,{
                min:1,
                max:100
            });
            var checkInDescricao = validator
            .isByteLength(
                req.body.Descricao,{
                    min:2,
                    max:200
            })
            var checkInEmail = validator.isEmail(req.body.Contato_email)
            var checkInRequisito = validator
            .isByteLength(req.body.Requisito,{
                min:5,
                max:undefined
            })
            var checkInFxSalario = validator.isNumeric(req.body.FaixaSalario,{no_symbols:true})
            var checkInPreenchida = validator.isBoolean(req.body.Preenchida)

            if(!check) throw 'Nome De vaga deve ter mais de 1 caracter';
            if(!checkInDescricao) throw 'Descricao De vaga deve ter mais de 1 caracter';
            if(!checkInEmail) throw 'Email Invalido';
            if(!checkInRequisito) throw 'Requisito Deve Ser Preenchido';
            if(!checkInFxSalario) throw 'Deve ser informado valores com numeros reais : 250.00';
            if(!checkInPreenchida) throw 'Opcao deve estar Nao preenchida para aparecer na lista';
            */
            const  vagas = await Vagas.findByIdAndUpdate(req.params.id,req.body,{new:true})
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