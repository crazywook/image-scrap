export interface HttpRequest {
  baseUrl: string
  get<R>(url: string): HttpRequestResult<R>
  post<R>(url: string, data: R): HttpRequestResult
  put<R>(url: string, data: R): HttpRequestResult
  delete<R>(url: string, data: R): HttpRequestResult
}

type HttpRequestResult<R = {}> = Promise<{
  data?: R
  error?: string
}>
