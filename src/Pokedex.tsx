import React, { useEffect, useState } from 'react'

interface PokemonResponse {
  results: {
    name: string
  }[]
}

export const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonResponse>()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [])

  if (!pokemon) {
    return <>Cargando...</>
  }

  return (
    <ul>
      {pokemon.results.map((result) => (
        <li key={result.name}>{result.name}</li>
      ))}
    </ul>
  )
}
