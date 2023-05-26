import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'
import pokemons from './pokemon.json'

describe('Pokédex', () => {
  it('shows all pokemon', () => {
    render(<Pokedex />)
    pokemons.results.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })
})
