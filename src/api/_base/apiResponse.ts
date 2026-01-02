export type ApiResponse<T> = ApiResponseError | ApiResponseSuccess<T>;

export interface ApiResponseSuccess<T> {
  isSuccess: true;
  msg?: string | null;
  data: T;
}

export interface ApiResponseError {
  isSuccess: false;
  error: string;
}
