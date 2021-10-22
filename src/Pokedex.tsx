import React from 'react'
import pokemon from './pokemon.json'

export const Pokedex: React.FC = () => {
  return (
    <>
      {pokemon.results.map((result) => (
        <span key={result.name}>{result.name}</span>
      ))}
    </>
  )
}
