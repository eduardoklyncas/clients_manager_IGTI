import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Costumers from "../pages/Costumers";
import RecoverPassword from "../pages/RecoverPassword";
import Form from "../pages/Form";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/cadastro" component={Register} />
          <Route exact path="/painel" component={Costumers} />
          <Route exact path="/formulario/:id?" component={Form} />
          <Route exact path="/recuperar-senha" component={RecoverPassword} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
