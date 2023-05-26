import React, { useEffect, useState } from 'react'

interface Pokemon {
  name: string
  url: string
}

export const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[] | undefined>(undefined)

  useEffect(() => {
    const loadPokemons = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0',
      )
      const res = await response.json()

      setPokemon(res.results)
    }

    loadPokemons()
  }, [])

  if (pokemon === undefined) {
    return <div>Cargando...</div>
  }

  return (
    <section>
      <ul>
        {pokemon.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </section>
  )
}
