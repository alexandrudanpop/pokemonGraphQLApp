import React, { Component } from "react";
import graphQlFetch from "./graphQlFetch";
import Loader from "./Loader";
import PokemonsList from "./PokemonsList";
import createQuery from "./graphQlQuery";
import "./App.css";

class App extends Component {
  state = {
    pokemons: [],
    take: 10,
    loading: false
  };

  async componentDidMount() {
    await this.fetchNext();
  }

  async componentDidUpdate() {
    if (this.state.take !== this.state.pokemons.length && !this.state.loading) {
      await this.fetchNext();
    }
  }

  fetchNext = async () => {
    this.setState({ ...this.state, loading: true });

    const { data } = await graphQlFetch(createQuery(this.state.take));
    this.setState({
      ...this.state,
      pokemons: data.pokemons,
      loading: false
    });
  };

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
