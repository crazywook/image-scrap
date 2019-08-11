import {graphHttp as http} from "../lib/http"

export function fetchPhotoFeedsCards(options: number) {
  return http.get(`?query={
    photo {
      id
      image_url
      nickname
      profile_image_url
    }
  }`)
}
