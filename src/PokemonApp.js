import React, { Component } from "react";
import graphQlFetch from "./graphQlFetch";
import PokemonsList from "./PokemonsList";
import createQuery from "./graphQlQuery";

class PokemonApp extends Component {
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

  render = () => (
    <PokemonsList
      pokemons={this.state.pokemons}
      loading={this.state.loading}
      incrementTake={this.incrementTake}
    />
  );
}

export default PokemonApp;
