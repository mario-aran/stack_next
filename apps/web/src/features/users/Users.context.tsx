'use client';

import { createContext, PropsWithChildren } from 'react';

import {
  ContextInitialValuesType,
  StateInitialValuesType,
} from '@/features/users/types';

import { data } from './data';
import { useUsersContext } from './hooks/useUsersContext';

// Initial values
const rowsPerPageOptions = [5, 10, 25];
const dataLength = data.length;

const stateInitialValues: StateInitialValuesType = {
  page: 0,
  rowsPerPage: rowsPerPageOptions[0],
  filteredData: data.slice(0, rowsPerPageOptions[0]),
};

const contextInitialValues: ContextInitialValuesType = {
  ...stateInitialValues,
  rowsPerPageOptions,
  dataLength,
  changePage: () => {},
  changeRowsPerPage: () => {},
  filterDataBySearch: () => {},
};

// Context
export const UsersContext = createContext(contextInitialValues);

export const UsersProvider = ({ children }: PropsWithChildren) => {
  const { values, changePage, changeRowsPerPage, filterDataBySearch } =
    useUsersContext(stateInitialValues);

  const providerValues = {
    ...values,
    rowsPerPageOptions,
    dataLength,
    changePage,
    changeRowsPerPage,
    filterDataBySearch,
  };

  return (
    <UsersContext.Provider value={providerValues}>
      {children}
    </UsersContext.Provider>
  );
};
