const createListQuery = take => `{
  pokemons(first: ${take}) {
    id
    number
    name
    image
  }
}`;

const createPokemonQuery = pokemonName => `{
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

export { createListQuery, createPokemonQuery };
