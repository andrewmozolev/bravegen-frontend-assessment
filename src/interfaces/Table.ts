export interface TableData<T = any> {
  columns: Column[];
  rows: Row<T>[];
}

export interface Column {
  title: string;
  key: string;
  canSort?: boolean;
  sortDirection?: SortDirectionEnum;
  minimizeWidth?: boolean;
  maxWidth?: string;
}

export interface Row<T> {
  cells: (string | React.ReactNode)[];
  data: T;
  id: string;
  checked?: boolean;
}

export enum SortDirectionEnum {
  Ascending = 0,
  Descending = 1,
}
