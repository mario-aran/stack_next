'use client';

import { createContext, PropsWithChildren, useReducer } from 'react';

import { usersData } from '@/features/users/data';

// Types
interface StateType {
  page: number;
  rowsPerPage: number;
  fullData: typeof usersData;
  filteredData: typeof usersData;
}

interface ActionSetPageType {
  type: typeof ACTIONS.SET_PAGE;
  page: StateType['page'];
}

interface ActionSetRowsPerPageType {
  type: typeof ACTIONS.SET_ROWS_PER_PAGE;
  rowsPerPage: StateType['rowsPerPage'];
}

interface ActionSetDataType {
  type: typeof ACTIONS.SET_DATA;
  fullData: StateType['fullData'];
}

type ActionType =
  | ActionSetPageType
  | ActionSetRowsPerPageType
  | ActionSetDataType;

interface FilterDataBySearchPropsType {
  filterId: string;
  filterWords: string;
}

interface ContextUpdateValuesType {
  changePage: (page: number) => void;
  changeRowsPerPage: (rowsPerPage: number) => void;
  filterDataBySearch: (props: FilterDataBySearchPropsType) => void;
}

// Constants
const ACTIONS = {
  SET_PAGE: 'SET_PAGE',
  SET_ROWS_PER_PAGE: 'SET_ROWS_PER_PAGE',
  SET_DATA: 'SET_DATA',
} as const;

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

const initialContextValues = {
  ...initialStateValues,
  rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
  fullDataLength: usersData.length,
};

const initialContextUpdateValues: ContextUpdateValuesType = {
  changePage: () => {},
  changeRowsPerPage: () => {},
  filterDataBySearch: () => {},
};

// Context
export const UsersMasterContext = createContext(initialContextValues);
export const UsersMasterUpdateContext = createContext(
  initialContextUpdateValues,
);

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

// Provider
export const UsersMasterProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialStateValues);

  const changePage = (page: number) =>
    dispatch({ type: ACTIONS.SET_PAGE, page });

  const changeRowsPerPage = (rowsPerPage: number) =>
    dispatch({ type: ACTIONS.SET_ROWS_PER_PAGE, rowsPerPage });

  const filterDataBySearch = ({
    filterId,
    filterWords,
  }: FilterDataBySearchPropsType) => {
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
  };

  const ContextValues = {
    page: state.page,
    rowsPerPage: state.rowsPerPage,
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    fullData: state.fullData,
    fullDataLength: state.fullData.length,
    filteredData: state.filteredData,
  };

  const ContextUpdateValues = {
    changePage,
    changeRowsPerPage,
    filterDataBySearch,
  };

  return (
    <UsersMasterContext.Provider value={ContextValues}>
      <UsersMasterUpdateContext.Provider value={ContextUpdateValues}>
        {children}
      </UsersMasterUpdateContext.Provider>
    </UsersMasterContext.Provider>
  );
};
