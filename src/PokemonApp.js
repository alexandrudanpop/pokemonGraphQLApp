import React, { Component } from "react";
import graphQlFetch from "./graphQlFetch";
import PokemonsList from "./PokemonsList";
import { createListQuery } from "./graphQlQuery";

class PokemonApp extends Component {
  state = {
    pokemons: [],
    take: 10,
    loading: false
  };

  async componentDidMount() {
    await this.fetchNext();
  }

  fetchNext = async () => {
    if (!this.state.loading) {
      const nextTake = this.state.take + 10;
      this.setState({ ...this.state, loading: true, take: nextTake });

      const { data } = await graphQlFetch(createListQuery(nextTake));
      this.setState({
        ...this.state,
        pokemons: data.pokemons,
        loading: false
      });
    }
  };

  render = () => (
    <PokemonsList
      pokemons={this.state.pokemons}
      loading={this.state.loading}
      fetchNext={this.fetchNext}
    />
  );
}

export default PokemonApp;
