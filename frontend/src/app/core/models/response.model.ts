export interface BaseResponse<T> {
  message: string;
  statusCode: number;
  data: T | null;
}
