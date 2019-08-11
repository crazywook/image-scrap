import {createAction} from "redux-actions"

import {PhotoDto, PhotoFeedState, RequestCardsOptions} from "./types"

export const PHOTO_FEEDS_REQUEST_CARDS = `PHOTO_FEEDS_REQUEST_CARDS`
export const PHOTO_FEEDS_CARDS_RECEIVED = `PHOTO_FEEDS_CARDS_RECEIVED`
export const PHOTO_FEEDS_CHECK_ONLY_SCRAPED = `PHOTO_FEEDS_CHECK_ONLY_SCRAPED`
export const PHOTO_FEEDS_HAS_MORE = `PHOTO_FEEDS_HAS_MORE`
export const PHOTO_FEEDS_REQUEST_FAILED = `PHOTO_FEEDS_REQUEST_FAILED`
export const PHOTO_FEEDS_REQUEST_FINISHED = `PHOTO_FEEDS_FINISHED`
export const PHOTO_FEEDS_REQUEST_SCRAPED_ID = `PHOTO_FEEDS_REQUEST_SCRAPED_ID`
export const PHOTO_FEEDS_SCRAPED_ID_RECEIVED = `PHOTO_FEEDS_SCRAPED_ID_RECEIVED`
export const PHOTO_FEEDS_UNCHECK_ONLY_SCRAPED = `PHOTO_FEEDS_UNCHECK_ONLY_SCRAPED`
export const PHOTO_FEEDS_ADD_SCRAPED_ID = `PHOTO_FEEDS_ADD_SCRAPED_ID`
export const PHOTO_FEEDS_REMOVE_SCRAPED_ID = `PHOTO_FEEDS_REMOVE_SCRAPED_ID`
export const PHOTO_FEEDS_TOGGLE_ONLY_SCRAPED = `PHOTO_FEEDS_TOGGLE_ONLY_SCRAPED`
export const PHOTO_FEEDS_TOGGLE_CARD_SCRAP = `PHOTO_FEEDS_TOGGLE_CARD_SCRAP`
export const PHOTO_FEEDS_TOAST_MESSAGE = `PHOTO_FEEDS_TOAST_MESSAGE`

export const PhotoFeedActions = {
  addScrapedIds: createAction<{id: number}>(PHOTO_FEEDS_ADD_SCRAPED_ID),
  checkOnlyScraped: createAction(PHOTO_FEEDS_CHECK_ONLY_SCRAPED),
  updateHasMore: createAction(PHOTO_FEEDS_HAS_MORE),
  requestPhotoFeedsCards: createAction<RequestCardsOptions>(PHOTO_FEEDS_REQUEST_CARDS),
  requestScrapedIds: createAction(PHOTO_FEEDS_REQUEST_SCRAPED_ID),
  removeScrapedIds: createAction<{id: number}>(PHOTO_FEEDS_REMOVE_SCRAPED_ID),
  receivePhotoFeedsCards: createAction<{
    cards: PhotoDto,
    currentPageNumber: number
  }>(PHOTO_FEEDS_CARDS_RECEIVED),
  receivePhotoFeedsScrapedId: createAction<{scrapedIds: PhotoFeedState["scrapedIds"]}>(PHOTO_FEEDS_SCRAPED_ID_RECEIVED),
  requestPhotoFeedsCardsFailed: createAction(PHOTO_FEEDS_REQUEST_FAILED),
  requestPhotoFeedsFinished: createAction(PHOTO_FEEDS_REQUEST_FINISHED),
  toggleOnlyScraped: createAction<PhotoFeedState["isShowOnlyScraped"]>(PHOTO_FEEDS_TOGGLE_ONLY_SCRAPED),
  toggleCardScrap: createAction<{id: number}>(PHOTO_FEEDS_TOGGLE_CARD_SCRAP),
  uncheckOnlyScraped: createAction(PHOTO_FEEDS_UNCHECK_ONLY_SCRAPED),
  toastMessage: createAction<{toastMessage: string}>(PHOTO_FEEDS_TOAST_MESSAGE)
}
