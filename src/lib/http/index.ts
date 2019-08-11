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

function xhrRequest(url: string, options?: HttpOptions) {
  return new Promise((resolve, reject) => {

    const data = options && options.data || null
    const method = options && options.method || "GET"

    const xhr = new XMLHttpRequest()
    xhr.withCredentials = false

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        resolve({
          data: JSON.parse(this.responseText)
        })
      }
    })

    xhr.open(method, url)
    xhr.setRequestHeader("cache-control", "no-cache")
    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.send(JSON.stringify(data))
  })
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

export const bucketplaceHttp = new HttpWrapper(
  xhrRequest,
  "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test",
  {
    credentials: false
  }
)

export const graphHttp = new HttpWrapper(
  http,
  "http://localhost:4000/graphql",
)
