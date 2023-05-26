import React from 'react'
import pokemon from './pokemon.json'

export const Pokedex: React.FC = () => {
  return (
    <div>
      {pokemon.results.map(({ name }) => (
        <p> {name} </p>
      ))}
    </div>
  )
}
