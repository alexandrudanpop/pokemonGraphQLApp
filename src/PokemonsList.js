import React from "react";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon";
import Loader from "./Loader";

const PokemonsList = ({ pokemons, fetchNext, loading }) => (
  <>
    <h1>Pokemons</h1>
    {loading && <Loader />}
    {pokemons.map(p => (
      <div key={p.id}>
        <Link
          to={`/pokemon/${p.name}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Pokemon image={p.image} name={p.name} number={p.number} />
        </Link>
      </div>
    ))}
    {pokemons.length > 0 && (
      <button className="app-button " onClick={fetchNext}>
        More
      </button>
    )}
  </>
);

export default PokemonsList;
