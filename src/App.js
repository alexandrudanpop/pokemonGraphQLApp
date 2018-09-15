import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PokemonApp from "./PokemonApp";
import PokemonDetails from "./PokemonDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path={"/"} component={PokemonApp} />
            <Route exact path={"/pokemon/:name"} component={PokemonDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
