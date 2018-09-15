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

export default graphQlFetch;
