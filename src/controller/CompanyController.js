const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Company = mongoose.model('Company');

module.exports={
    async addCompany(req,res){
        try{
            var check = validator
            .isByteLength(req.body.Nome_fantasia,{
                min:1,
                max:100
            });
            var checkInEndereco = validator
            .isByteLength(
                req.body.Endereco,{
                    min:2,
                    max:200
            })
            var checkInUf = validator
            .isByteLength(
                req.body.Uf,{
                    min:2,
                    max:4
            })
            var checkInEmail = validator.isEmail(req.body.Email_empresa)
            var checkInSenha = validator
            .isByteLength(req.body.Senha,{
                  min:8,
                  max:100
            })
            var checkInTelefone = validator.isMobilePhone(req.body.Telefone)
            var checkInCnpj = validator.isNumeric(req.body.Cnpj,{no_symbols:true})

            if(!check) throw 'Nome De vaga deve ter mais de 1 caracter';
            if(!checkInEndereco) throw 'Endereco De Empresa deve ter mais de 1 caracter';
            if(!checkInEmail) throw 'Email Invalido';
            if(!checkInTelefone) throw 'Telefone Deve Ser Real ou  Preenchido';
            if(!checkInSenha) throw 'Deve ser informado valores com numeros reais : 250.00';
            if(!checkInCnpj) throw 'Opcao deve estar Nao preenchida para aparecer na lista';
            if(!checkInUf) throw 'Estado Deve ser selecionado'


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
            var check = validator
            .isByteLength(req.body.Nome_fantasia,{
                min:1,
                max:100
            });
            var checkInEndereco = validator
            .isByteLength(
                req.body.Endereco,{
                    min:2,
                    max:200
            })
            var checkInUf = validator
            .isByteLength(
                req.body.Uf,{
                    min:2,
                    max:4
            })
            var checkInEmail = validator.isEmail(req.body.Email_empresa)
            var checkInSenha = validator
            .isByteLength(req.body.Senha,{
                  min:8,
                  max:100
            })
            var checkInTelefone = validator.isMobilePhone(req.body.Telefone)
            var checkInCnpj = validator.isNumeric(req.body.Cnpj,{no_symbols:true})

            if(!check) throw 'Nome De vaga deve ter mais de 1 caracter';
            if(!checkInEndereco) throw 'Endereco De Empresa deve ter mais de 1 caracter';
            if(!checkInEmail) throw 'Email Invalido';
            if(!checkInTelefone) throw 'Telefone Deve Ser Real ou  Preenchido';
            if(!checkInSenha) throw 'Deve ser informado valores com numeros reais : 250.00';
            if(!checkInCnpj) throw 'Opcao deve estar Nao preenchida para aparecer na lista';
            if(!checkInUf) throw 'Estado Deve ser selecionado'
            
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