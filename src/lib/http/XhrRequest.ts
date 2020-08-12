interface HttpOptions {
  data: {}
  method: string
}

export function xhrRequest(url: string, options?: HttpOptions) {
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