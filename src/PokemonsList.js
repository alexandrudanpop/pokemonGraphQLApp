import React from "react";
import Pokemon from "./Pokemon";

const PokemonsList = ({ pokemons, incrementTake }) => (
  <>
    {pokemons.map(p => (
      <div key={p.id}>
        <Pokemon pokemon={p} />
      </div>
    ))}
    <button className="app-button " onClick={incrementTake}>
      More
    </button>
  </>
);

export default PokemonsList;
