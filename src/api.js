const URL_POKEMON_API = 'https://pokeapi.co/api/v2/pokemon?limit='

async function fetchPokemon(pokemonIndex) {
  const response = await fetch(pokemonIndex.url)

  const pokemonInfo = await response.json()

  const pokemon = {
    name: pokemonInfo.name,
  }
  return pokemon
}

const api = {
  getPokemonsByLimit: async (limit) => {
    const response = await fetch(URL_POKEMON_API + limit)
    const limitedListPokemons = await response.json()
    const pokemonUrls = limitedListPokemons.results

    const allPokemons = await Promise.all(
      pokemonUrls.map(async (pokemonIndex) => await fetchPokemon(pokemonIndex)),
    )
    return allPokemons
  },
}
export default api
