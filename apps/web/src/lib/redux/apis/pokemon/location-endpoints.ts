import { pokemonApi } from './pokemon.api';

const PATH = 'location';

const locationEndpoints = pokemonApi.injectEndpoints({
  overrideExisting: 'throw',
  endpoints: (build) => ({
    getLocation: build.query({ query: () => PATH }),
    getLocationByName: build.query({ query: (name) => `${PATH}/${name}` }),
  }),
});

export const { useGetLocationQuery, useGetLocationByNameQuery } =
  locationEndpoints;
