import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import NavBar from "./navbar"
import Home from "./home"
import Counter from "./counter"
import ToggleText from "./toggleText"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>My Navigation Homework</h1>

            <NavBar />

            <hr/>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/counter" component={Counter} />
              <Route path="/toggle-text" component={ToggleText} />
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}
