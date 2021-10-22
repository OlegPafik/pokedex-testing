import { render, screen } from '@testing-library/react'
import { Pokedex } from './Pokedex'
import pokemon from './pokemon.json'

describe('Pokédex', () => {
  it('muestra un listado de pokemon', async () => {
    render(<Pokedex />)

    for (let result of pokemon.results) {
      expect(await screen.findByText(result.name)).toBeInTheDocument()
    }
  })
})
