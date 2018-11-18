const mongoose = require('mongoose');

const Users = mongoose.model('Users');
const Company = mongoose.model('Company');
const Vagas = mongoose.model('Vagas');
/*const Company = mongoose.model('Company');
const Vagas = mongoose.model('Vagas');
*/
module.exports = {
    Users,
    Company,
    Vagas
}