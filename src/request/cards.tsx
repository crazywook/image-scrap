import {bucketplaceHttp as http} from "../lib/http"

export async function fetchPhotoFeedsCards(options: number) {
  return await http.get(`/cards/page_${options}.json`)
}
