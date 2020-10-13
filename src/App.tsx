import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./view/About";
import Home from "./view/home";
import Resume from "./view/resume";
import Myworks from "./view/myworks";
import Notfound from "./view/Notfound";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/aboutme">
            <About/>
          </Route>
          <Route exact path="/resume">
            <Resume/>
          </Route>
          <Route exact path="/myworks">
            <Myworks/>
          </Route>
          <Route exact path="/404">
            <Notfound/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



function Users() {
  return <h2>Users</h2>;
}
