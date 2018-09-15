const createQuery = take => `{
  pokemons(first: ${take}) {
    id
    number
    name
    image
  }
}`;

export default createQuery;
