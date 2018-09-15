import React, { Component } from "react";
import Pokemon from "./Pokemon";
import graphQlFetch from "./graphQlFetch";
import Loader from "./Loader";
import "./App.css";

class App extends Component {
  state = {
    pokemons: [],
    take: 10
  };

  async componentDidMount() {
    const query = `{
      pokemons(first: ${this.state.take}) {
        id
        name
        image
      }
    }`;

    const res = await graphQlFetch(query);
    this.setState({ ...this.state, pokemons: res.data.pokemons });
  }

  async componentDidUpdate() {
    if (this.state.take !== this.state.pokemons.length) {
      const query = `{
        pokemons(first: ${this.state.take}) {
          id
          name
          image
        }
      }`;

      const res = await graphQlFetch(query);
      this.setState({ ...this.state, pokemons: res.data.pokemons });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.pokemons.length === 0 ? (
          <Loader />
        ) : (
          <>
            {this.state.pokemons.map(pokemon => (
              <div key={pokemon.id}>
                <Pokemon pokemon={pokemon} />
              </div>
            ))}
            <button
              onClick={() =>
                this.setState({ ...this.state, take: this.state.take + 10 })
              }
            >
              More
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
