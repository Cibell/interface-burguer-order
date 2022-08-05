import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Pedidos from "./containes/pedidos"
import Lista from "./containes/lista";

function Routes(){

    return(
        <Router>
            <Switch>
            <Route exact path="/" component={Pedidos}/>
            <Route exact path="/Lista" component={Lista }/>
            </Switch>
        </Router>


    )


}



export default Routes