import React from 'react'
import pokemons from './pokemon.json'

export const Pokedex: React.FC = () => {
  return (
    <div>
      {pokemons.results.map((pokemon) => (
        <p> {pokemon.name} </p>
      ))}
    </div>
  )
}
