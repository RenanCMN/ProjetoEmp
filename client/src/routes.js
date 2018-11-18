import React from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom';


import Vagas from './pages/Vagas/vagas';
import Cadastro from './pages/Cadastro/cadastro'

const Routes = () =>(
    <BrowserRouter> 
        <Switch>
            <Route path='/vagas' component={Vagas} />
            <Route path='/Cadastrousuario' component={Cadastro} />
        </Switch>
    </BrowserRouter>
)

export default Routes;