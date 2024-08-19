import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const REDUCER_PATH = 'pokemonApi';
const BASE_URL = 'https://pokeapi.co/api/v2/';

const PATHS = {
  LOCATION: 'location',
  POKEMON: 'pokemon',
} as const;

export const pokemonApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    // Location
    getLocation: build.query({ query: () => PATHS.LOCATION }),
    getLocationByName: build.query({
      query: (name) => `${PATHS.LOCATION}/${name}`,
    }),
    // Pokemon
    getPokemon: build.query({ query: () => PATHS.POKEMON }),
    getPokemonByName: build.query({
      query: (name) => `${PATHS.POKEMON}/${name}`,
    }),
  }),
});

export const {
  useGetLocationByNameQuery,
  useGetLocationQuery,
  useGetPokemonByNameQuery,
  useGetPokemonQuery,
} = pokemonApi;
