export type StateInitialValuesType = {
  page: number;
  rowsPerPage: number;
  filteredData: DataType;
};
export type ChangeValuesPropsType = Partial<StateInitialValuesType>;
export type DataType = DataRowType[];

export interface DataRowType {
  id: number;
  email: string;
  name: string;
  profile: string;
}

export interface FilterDataBySearchPropsType {
  filterId: string;
  filterWords: string;
}

export interface ContextInitialValuesType extends StateInitialValuesType {
  rowsPerPageOptions: number[];
  dataLength: number;
  changePage: (page: number) => void;
  changeRowsPerPage: (rowsPerPage: number) => void;
  filterDataBySearch: (props: FilterDataBySearchPropsType) => void;
}
