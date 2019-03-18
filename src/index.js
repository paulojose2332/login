import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import Cadastro from './cadastro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//class App extends React.Component {
//    render() {
//        return (
//            <Login />
//        );
//    }
//}


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </ BrowserRouter>,
    document.querySelector('#root')
);