import {HttpRequest} from "./HttpRequest"

interface HttpOptions {
  baseUrl?: string
  method?: string
}

export async function http<R>(url: string, options?: HttpOptions):
  Promise<{
    data?: R
    error?: string
  }>
{
  let method: string
  if (options) {
    method = options.method || "get"
  } else {
    method = "get"
  }

  const fullUrl = url
  const result = await fetch(fullUrl, {
    method,
    mode: "no-cors",
    credentials: "include",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  console.log("result text", await result.text())
  console.log("result json", await result.json())
  if (result.ok) {
    const data = await result.json()
    return {data}
  }

  return {
    error: result.statusText
  }
}

function xhrRequest(url: string, options?: any) {
  return new Promise((resolve, reject) => {

    const data = null

    const xhr = new XMLHttpRequest()
    xhr.withCredentials = false

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        resolve({
          data: JSON.parse(this.responseText)
        })
      }
    })

    xhr.open("GET", url)
    xhr.setRequestHeader("cache-control", "no-cache")

    xhr.send(data)
  })
}

export class HttpWrapper implements HttpRequest {

  constructor(
    readonly httpRequest: <T>(fullUrl, options) => any,
    readonly baseUrl: string,
    readonly options?: {
      credentials: boolean
    }
  ) {
  }

  get<R>(url: string) {
    const fullUrl = `${this.baseUrl}${url}`
    return this.httpRequest<R>(fullUrl, {
      method: "get"
    })
  }

  post<R>(url: string) {
    const fullUrl = `${this.baseUrl}${url}`
    return http<R>(fullUrl, {
      method: "post"
    })
  }

  put<R>(url: string, data) {
    const fullUrl = `${this.baseUrl}${url}`
    return http<R>(fullUrl, {
      method: "put"
    })
  }

  delete<R>(url: string) {
    const fullUrl = `${this.baseUrl}${url}`
    return http<R>(fullUrl, {
      method: "delete"
    })
  }
}

export function createHttp(options?: HttpOptions) {

  return (url, method) => http(url, options)
}

export const bucketplaceHttp = new HttpWrapper(
  xhrRequest,
  "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test",
  {
    credentials: false
  }
)
