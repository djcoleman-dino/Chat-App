import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Landing from '../Landing';
import Signin from '../Signin';

export default function NavRouter() {
  return (
    <Router>
      <nav>
        <div className="left-side">
          <NavLink to="/">Chatty</NavLink>
          <NavLink to="#">Features</NavLink>
          <NavLink to="#">Solutions</NavLink>
          <NavLink to="#">Pricing</NavLink>
        </div>
        <div className="right-side">
          <NavLink to="#">Sign up</NavLink>
          <NavLink to="signin">Sign in</NavLink>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}
