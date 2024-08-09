'use client';

import Box from '@mui/material/Box';
import { useState } from 'react';

import { usersData } from '@/features/users/data';
import {
  FilterDataByPagePropsType,
  FilterDataBySearchPropsType,
} from '@/features/users/types';

import { Pagination } from './Pagination';
import { SearchBox } from './SearchBox';
import { UsersTable } from './UsersTable';

// Constants
const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];
const DEFAULT_ROWS_PER_PAGE = ROWS_PER_PAGE_OPTIONS[0];
const DEFAULT_PAGE = 0;

// Initial values
const initialDataStateValues = {
  fullData: usersData,
  filteredData: usersData.slice(0, DEFAULT_ROWS_PER_PAGE),
};

export const UsersMaster = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
  const [dataState, setDataState] = useState(initialDataStateValues);

  const { fullData, filteredData } = dataState;

  const filterDataByPage = ({
    newPage,
    newRowsPerPage = rowsPerPage,
    newFullData = fullData,
  }: FilterDataByPagePropsType) => {
    const startIndex = newPage * newRowsPerPage;
    return newFullData.slice(startIndex, startIndex + newRowsPerPage);
  };

  const changePage = (newPage: number) => {
    const newFilteredData = filterDataByPage({ newPage });
    setDataState(({ fullData }) => ({
      fullData,
      filteredData: newFilteredData,
    }));
    setPage(newPage);
  };

  const changeRowsPerPage = (newRowsPerPage: number) => {
    const newFilteredData = filterDataByPage({
      newRowsPerPage,
      newPage: DEFAULT_PAGE,
    });
    setDataState(({ fullData }) => ({
      fullData,
      filteredData: newFilteredData,
    }));
    setPage(DEFAULT_PAGE);
    setRowsPerPage(newRowsPerPage);
  };

  const filterDataBySearch = ({
    filterId,
    filterWords,
  }: FilterDataBySearchPropsType) => {
    // Reset data
    let newFullData = usersData;

    // Filter data by id
    if (filterId) {
      newFullData = newFullData.filter(({ id }) => id === +filterId);
    }

    // Filter data by words
    if (filterWords) {
      const filterWordsLower = filterWords.toLowerCase();
      newFullData = newFullData.filter(({ email, name, profile }) =>
        [email, name, profile].some((el) =>
          el.toLowerCase().includes(filterWordsLower),
        ),
      );
    }

    // Set new full and filtered data
    const newFilteredData =
      filterId || filterWords
        ? filterDataByPage({ newFullData, newPage: DEFAULT_PAGE })
        : initialDataStateValues.filteredData;
    setDataState({ fullData: newFullData, filteredData: newFilteredData });
  };

  const paginationProps = {
    page,
    rowsPerPage,
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    fullDataLength: fullData.length,
    changePage,
    changeRowsPerPage,
  };

  return (
    <Box sx={{ minWidth: 650 }}>
      <SearchBox filterDataBySearch={filterDataBySearch} />
      <UsersTable filteredData={filteredData} />
      <Pagination {...paginationProps} />
    </Box>
  );
};
