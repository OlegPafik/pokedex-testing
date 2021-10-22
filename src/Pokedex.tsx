import React from 'react'
import pokemon from './pokemon.json'

export const Pokedex: React.FC = () => {
  return (
    <ul>
      {pokemon.results.map((result) => (
        <li key={result.name}>{result.name}</li>
      ))}
    </ul>
  )
}
