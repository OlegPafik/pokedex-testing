import React from 'react'
import pokemons from './pokemon.json'

export const Pokedex: React.FC = () => {
  return (
    <div>
      {pokemons.results.map(({ name }) => (
        <p> {name} </p>
      ))}
    </div>
  )
}
