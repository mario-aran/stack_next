import { pokemonApi } from './pokemon.api';

const PATH = 'pokemon';

const pokemonEndpoints = pokemonApi.injectEndpoints({
  overrideExisting: 'throw',
  endpoints: (build) => ({
    getPokemon: build.query({ query: () => PATH }),
    getPokemonByName: build.query({ query: (name) => `${PATH}/${name}` }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonByNameQuery } =
  pokemonEndpoints;
