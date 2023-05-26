import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'
import pokemons from './pokemon.json'

describe('Pokédex', () => {
  it('shows pokemon bulbasaur', () => {
    render(<Pokedex />)

    expect(screen.getByText('bulbasaur')).toBeInTheDocument()
  })
  it('shows pokemon ivysaur', () => {
    render(<Pokedex />)

    expect(screen.getByText('ivysaur')).toBeInTheDocument()
  })
  it('shows pokemon venusaur', () => {
    render(<Pokedex />)

    expect(screen.getByText('venusaur')).toBeInTheDocument()
  })

  it('shows all pokemon', () => {
    render(<Pokedex />)
    pokemons.results.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })
})
