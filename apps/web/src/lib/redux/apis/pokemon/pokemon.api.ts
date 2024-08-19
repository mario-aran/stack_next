import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const REDUCER_PATH = 'pokemonApi';
const BASE_URL = 'https://pokeapi.co/api/v2/';

export const pokemonApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
});
