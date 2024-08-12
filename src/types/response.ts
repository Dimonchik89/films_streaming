export type Response<T> = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
};

export type ResponseGenre<T> = {
  genres: T;
};

export type ResponseData<T> = {
  page: number;
  results: T;
  total_pages: number;
  totalREsults: number;
};
