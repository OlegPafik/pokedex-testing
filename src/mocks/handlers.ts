import { rest } from 'msw'
import pokemon from '../pokemon.json'

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pokemon))
  }),
]
