import React, { Component } from "react";
import Pokemon from "./Pokemon";
import "./App.css";

async function graphQlFetch(query) {
  const response = await fetch("https://graphql-pokemon.now.sh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  });

  return await response.json();
}

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
          "Loading..."
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
