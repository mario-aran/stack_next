import { usersData } from '@/features/users/data';

// Data
export type UsersDataType = typeof usersData;
export type UsersDataRowType = UsersDataType[number];

// Method props
export interface FilterDataByPagePropsType {
  newPage: number;
  newRowsPerPage?: number;
  newFullData?: UsersDataType;
}

export interface FilterDataBySearchPropsType {
  filterId: string;
  filterWords: string;
}

// Component props
export interface SearchBoxPropsType {
  filterDataBySearch: (props: FilterDataBySearchPropsType) => void;
}

export interface UsersTablePropsType {
  filteredData: UsersDataType;
}

export interface PaginationPropsType {
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  fullDataLength: number;
  changePage: (newPage: number) => void;
  changeRowsPerPage: (newRowsPerPage: number) => void;
}
