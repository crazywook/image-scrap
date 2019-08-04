import {LocalStorage} from "./LocalStorage"

interface PhotoFeedStorageDto {
  scrapedIds: number[]
  name: string
}

class PhotoFeedStorage implements LocalStorage<PhotoFeedStorageDto> {

  get(key) {
    return window.localStorage.getItem(key) || ""
  }

  set(key, value) {
    return window.localStorage.setItem(key, value)
  }

  remove(key) {
    return window.localStorage.removeItem(key)
  }
}

export const photoFeedStorage = new PhotoFeedStorage()
