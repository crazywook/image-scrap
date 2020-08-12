import FetchWrapper from "./FetchWrapper"
import {HttpRequest} from "./HttpRequest"

interface HttpOptions {
  baseUrl?: string
  method?: string
  data?: {}
}

export async function http<R>(url: string, options?: HttpOptions):
  Promise<{
    data?: R
    error?: string
  }>
{
  let method: string
  let data: {} | undefined
  if (options) {
    method = options.method || "get"
    data = options.data || undefined
  } else {
    method = "get"
    data = undefined
  }

  const fullUrl = url
  const result = await fetch(fullUrl, {
    method,
    body: JSON.stringify(data)
  })
  console.log("result", result)
  if (result.ok) {
    const dataResult = await result.json()
    console.log("dataResult", dataResult)
    return {data: dataResult}
  }

  return {
    error: result.statusText
  }
}

export class HttpWrapper implements HttpRequest {

  constructor(
    readonly httpRequest: <T>(fullUrl, options) => any,
    readonly baseUrl: string,
    readonly options?: {
      credentials: boolean
    }
  ) { }

  get<R>(url: string) {
    const fullUrl = `${this.baseUrl}${url}`
    return this.httpRequest<R>(fullUrl, {
      method: "get"
    })
  }

  post<R>(url: string) {
    const fullUrl = `${this.baseUrl}${url}`
    return this.httpRequest<R>(fullUrl, {
      method: "post"
    })
  }

  put<R>(url: string, data) {
    const fullUrl = `${this.baseUrl}${url}`
    return this.httpRequest<R>(fullUrl, {
      method: "put",
      data
    })
  }

  delete<R>(url: string) {
    const fullUrl = `${this.baseUrl}${url}`
    return this.httpRequest<R>(fullUrl, {
      method: "delete"
    })
  }
}

export const graphHttpV2 = new FetchWrapper(
  "http://localhost:4000/graphql",
)
export const graphHttp = new HttpWrapper(
  http,
  "http://localhost:4000/graphql",
)
