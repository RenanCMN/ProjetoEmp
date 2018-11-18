const axios = require('axios');

//
// let grupoUsuarios = ('/api/usuarios', '123123')
// grupoUsuarios.get('/').then(..).catch(error => 'status, statusText, data')
// grupoUsuarios.get('/id').then(..)
// users.post('/').then(..)

module.exports = (path = '/', token = undefined) => {

    let config = {
        baseURL: 'http://localhost:3001' + path,
        timeOut: 5000,
        headers: {
            Accept: 'application/json',
            common: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }
    }

    if(token !== undefined) {
        //
        // 
        //
        Object.assign({'Authorization': 'Bearer ' + token  }, config.headers)
    }

    //
    // Criar instancia
    //
    const instance = axios.create(config);

    instance.interceptors.response.use(response => {
        // caso esteja valido
        return Promise.resolve(response)
    }, (error) => {
        //
        // Tratar erros
        //

        let {status, statusText, data} = error.response;

        if(status === 401) {
            // redirecionar para /login
            window.location.href = '/login';
        }

        return Promise.reject({status, statusText, data});
    })

    return instance;
}