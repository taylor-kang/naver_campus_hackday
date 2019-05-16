export type PaginationResult<T> = {
  list: T[],
  page: Pagination[],
  total?: number
};

export type Pagination = {
  current: boolean;
  num: number;
  text: string;
};