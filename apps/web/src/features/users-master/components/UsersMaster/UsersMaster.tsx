'use client';

import Stack from '@mui/material/Stack';
import { useCallback, useReducer } from 'react';

import { ACTIONS } from '@/features/users-master/constants';
import { usersData } from '@/features/users-master/data';
import {
  ActionType,
  FilterDataBySearchPropsType,
  StateType,
} from '@/features/users-master/types';

import { Pagination } from './Pagination';
import { SearchBox } from './SearchBox';
import { UsersTable } from './UsersTable';

// Constants
const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];
const DEFAULT_ROWS_PER_PAGE = ROWS_PER_PAGE_OPTIONS[0];
const DEFAULT_PAGE = 0;

// Initial values
const initialStateValues: StateType = {
  page: DEFAULT_PAGE,
  rowsPerPage: DEFAULT_ROWS_PER_PAGE,
  fullData: usersData,
  filteredData: usersData.slice(0, DEFAULT_ROWS_PER_PAGE),
};

// Reducer
const reducer = (state: StateType, action: ActionType) => {
  const filterDataByPage = ({
    page = DEFAULT_PAGE,
    rowsPerPage = state.rowsPerPage,
    fullData = state.fullData,
  } = {}) => {
    const startIndex = page * rowsPerPage;
    return fullData.slice(startIndex, startIndex + rowsPerPage);
  };

  switch (action.type) {
    case ACTIONS.SET_PAGE: {
      const page = action.page;
      const filteredData = filterDataByPage({ page });
      return { ...state, page, filteredData };
    }

    case ACTIONS.SET_ROWS_PER_PAGE: {
      const page = DEFAULT_PAGE;
      const rowsPerPage = action.rowsPerPage;
      const filteredData = filterDataByPage({ rowsPerPage });
      return { ...state, page, rowsPerPage, filteredData };
    }

    case ACTIONS.SET_DATA: {
      const page = DEFAULT_PAGE;
      const fullData = action.fullData;
      const filteredData = filterDataByPage({ fullData });
      return { ...state, page, fullData, filteredData };
    }

    default:
      return state;
  }
};

export const UsersMaster = () => {
  console.log('UsersMaster render');

  const [state, dispatch] = useReducer(reducer, initialStateValues);

  const changePage = useCallback(
    (page: number) => dispatch({ type: ACTIONS.SET_PAGE, page }),
    [],
  );

  const changeRowsPerPage = useCallback(
    (rowsPerPage: number) =>
      dispatch({ type: ACTIONS.SET_ROWS_PER_PAGE, rowsPerPage }),
    [],
  );

  const filterDataBySearch = useCallback(
    ({ filterId, filterWords }: FilterDataBySearchPropsType) => {
      let fullData = usersData;

      if (filterId) {
        fullData = fullData.filter(({ id }) => id === +filterId);
      }

      if (filterWords) {
        const filterWordsLower = filterWords.toLowerCase();
        fullData = fullData.filter(({ email, name, profile }) =>
          [email, name, profile].some((el) =>
            el.toLowerCase().includes(filterWordsLower),
          ),
        );
      }

      dispatch({ type: ACTIONS.SET_DATA, fullData });
    },
    [],
  );

  const paginationProps = {
    page: state.page,
    rowsPerPage: state.rowsPerPage,
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    fullDataLength: state.fullData.length,
    changePage,
    changeRowsPerPage,
  };

  return (
    <Stack sx={{ minWidth: 650 }} spacing={1}>
      <SearchBox filterDataBySearch={filterDataBySearch} />
      <UsersTable filteredData={state.filteredData} />
      <Pagination {...paginationProps} />
    </Stack>
  );
};
