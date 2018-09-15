import React, { Component } from "react";
import graphQlFetch from "./graphQlFetch";
import Loader from "./Loader";
import PokemonsList from "./PokemonsList";
import "./App.css";

class App extends Component {
  state = {
    pokemons: [],
    take: 10,
    loading: false
  };

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });

    const query = `{
      pokemons(first: ${this.state.take}) {
        id
        name
        image
      }
    }`;

    const res = await graphQlFetch(query);
    this.setState({
      ...this.state,
      pokemons: res.data.pokemons,
      loading: false
    });
  }

  async componentDidUpdate() {
    if (this.state.take !== this.state.pokemons.length && !this.state.loading) {
      this.setState({ ...this.state, loading: true });

      const query = `{
        pokemons(first: ${this.state.take}) {
          id
          name
          image
        }
      }`;

      const res = await graphQlFetch(query);

      this.setState({
        ...this.state,
        pokemons: res.data.pokemons,
        loading: false
      });
    }
  }

  incrementTake = () =>
    this.setState({ ...this.state, take: this.state.take + 10 });

  render() {
    return (
      <div className="App">
        {this.state.loading && <Loader />}
        {this.state.pokemons.length > 0 && (
          <PokemonsList
            pokemons={this.state.pokemons}
            incrementTake={this.incrementTake}
          />
        )}
      </div>
    );
  }
}

export default App;
