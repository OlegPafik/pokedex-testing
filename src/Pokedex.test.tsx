import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'
import pokemon from './pokemon.json'

describe('Pokédex', () => {
  it('muestra el pokemon Bulbasaur', () => {
    // Arrange

    // Act
    render(<Pokedex />)

    // Assert
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  })

  it('muestra un listado de pokemon', () => {
    render(<Pokedex />)

    for (let result of pokemon.results) {
      expect(screen.getByText(result.name)).toBeInTheDocument()
    }
  })
})
