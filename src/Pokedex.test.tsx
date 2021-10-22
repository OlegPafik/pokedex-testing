import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'

describe('Pokédex', () => {
  it('muestra el pokemon Bulbasaur', () => {
    // Arrange

    // Act
    render(<Pokedex />)

    // Assert
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
  })
})
