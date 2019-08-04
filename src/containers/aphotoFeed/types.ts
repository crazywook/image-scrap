export interface PhotoFeedState {
  toastMessage: string
  cards: PhotoDto[]
  currentPageNumber: number
  isCardsLoading: boolean
  isShowOnlyScraped: boolean
  hasMore: boolean
  scrapedIds: Set<number>
}

export interface PhotoDto {
  id: number
  image_url: string
  nickname: string
  profile_image_url: string
}

export interface RequestCardsOptions {
  pageNumber: number
}
