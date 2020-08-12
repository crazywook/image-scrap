export default interface SuccessResponse<T> {
  code: ResponseCode.SUCCESS
  data: T,
  message: string,
}

export interface NotSuccessResponse {
  code: Exclude<ResponseCode, ResponseCode.SUCCESS>
  data: null,
  message: string,
}

export type RequestResponse<T = unknown> = Promise<
  SuccessResponse<T>
  | NotSuccessResponse
>

type plain = string | number
interface Data {
  [index: string]: plain  | null | undefined | {}
}

export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export enum ContentType {
  JSON = "application/json",
  MULTIPART = "multipart/form-data",
  URLENCODED = "application/x-www-form-urlencoded",
  text = "text/plain",
}

export interface HttpRequestOptions {

  url: string
  data?: Data
  headers?: any
}

export interface HttpInterface {

  host: string

  request<T = any>(url: string, init: RequestInit): RequestResponse<T>
  get<T = any>(request: HttpRequestOptions): RequestResponse<T>
  get<T = any>(
    url: string,
    requestInfo?: Data,
  ): RequestResponse<T>
  post<T = any>(request: HttpRequestOptions): RequestResponse<T>
  post<T = any>(
    url: string,
    requestInfo?: Data,
  ): RequestResponse<T>
  delete<T = any>(url: string, payload?: Data): RequestResponse<T>
  put<T = any>(url: string, payload?: Data): RequestResponse<T>
}

export enum ResponseCode {

  SUCCESS = "1",
  FAILED = "0",
}
