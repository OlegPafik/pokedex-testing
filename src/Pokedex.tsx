import React from 'react'
import pokemons from './pokemon.json'

export const Pokedex: React.FC = () => {
  const pokemonsList = pokemons.results
  return (
    <div>
      {pokemonsList.map((pokemon) => (
        <p> {pokemon.name} </p>
      ))}
    </div>
  )
}
