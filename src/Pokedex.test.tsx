import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'
import pokemon from './pokemon.json'

describe('Pokédex', () => {
  it('muestra todos los nombres de los pokemon', () => {
    render(<Pokedex />)

    pokemon.results.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })
})
