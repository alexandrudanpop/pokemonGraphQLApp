import React, { Component } from "react";
import { Link } from "react-router-dom";
import graphQlFetch from "./graphQlFetch";
import Loader from "./Loader";
import Pokemon from "./Pokemon";

class PokemonDetails extends Component {
  state = { pokemon: {}, loading: false };

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });

    const pokemonName = this.props.match.params.name;
    const query = `{
      pokemon(
        name: "${pokemonName}"
      ) {
        id
        number
        name
        image
        evolutions {
          id
          number
          name
          image
        }
      }
    }`;

    const { data } = await graphQlFetch(query);

    this.setState({ ...this.state, pokemon: data.pokemon, loading: false });
  }

  render() {
    const { pokemon } = this.state;

    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <>
        <h1>Evolution</h1>
        <Pokemon
          number={pokemon.number}
          name={pokemon.name}
          image={pokemon.image}
        />

        {pokemon.evolutions &&
          pokemon.evolutions.length > 0 &&
          pokemon.evolutions.map(e => (
            <Pokemon
              key={e.id}
              number={e.number}
              name={e.name}
              image={e.image}
            />
          ))}

        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <button className="app-button">Back</button>
        </Link>
      </>
    );
  }
}

export default PokemonDetails;
