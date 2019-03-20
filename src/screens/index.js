import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./login";
import Cadastro from "./cadastro";
import Recover from "./recover";
import Users from "./users";

export class Screen extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/recover" component={Recover} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Screen;
