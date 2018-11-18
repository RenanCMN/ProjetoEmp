const passport = require('passport');
let {Strategy, ExtractJwt} = require('passport-jwt');
const {Users} = require('../support/Models');

module.exports = () => {
    
    const options = {
        secretOrKey: 'minha-sessao',
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    };

    const strategy = new Strategy(options, (payload, done) => {
        //
        // Estrategia para autenticar
        //
        Users.findOne({_id: payload.id})
            .then(result => {
                if(!result) done(null, false);

                return done(null, result);
            })
            .catch(error => done(error, null))
    });

    passport.use(strategy);

    return {
        init: () => passport.initialize(),
        guest: () => passport.authenticate('jwt', {session: false})
    }
}