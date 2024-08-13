import { ACTIONS } from '@/features/users-master/constants';
import { usersData } from '@/features/users-master/data';

export interface StateType {
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

export type ActionType =
  | ActionSetPageType
  | ActionSetRowsPerPageType
  | ActionSetDataType;

export interface PaginationPropsType {
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  fullDataLength: number;
  changePage: (page: number) => void;
  changeRowsPerPage: (rowsPerPage: number) => void;
}

export interface UsersTablePropsType {
  filteredData: typeof usersData;
}

export interface FilterDataBySearchPropsType {
  filterId: string;
  filterWords: string;
}

export interface SearchBoxPropsType {
  filterDataBySearch: (props: FilterDataBySearchPropsType) => void;
}
