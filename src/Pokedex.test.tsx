import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'

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
})
