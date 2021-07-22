import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Cadastro from './pages/Cadastro';
import Main from './pages/Main';
import Lancamentos from './pages/Lançamentos';
import Feminino from './pages/Feminino';
import Masculino from './pages/Masculino';
import Infantil from './pages/Infantil';


//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/lancamentos" component={Lancamentos} />
                <Route path="/feminino" component={Feminino} />
                <Route path="/masculino" component={Masculino} />
                <Route path="/infantil" component={Infantil} />
                
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;