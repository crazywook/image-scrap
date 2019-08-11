import {produce} from "immer"
import {handleActions} from "redux-actions"

import {
  PHOTO_FEEDS_ADD_SCRAPED_ID,
  PHOTO_FEEDS_CARDS_RECEIVED,
  PHOTO_FEEDS_CHECK_ONLY_SCRAPED,
  PHOTO_FEEDS_HAS_MORE,
  PHOTO_FEEDS_REMOVE_SCRAPED_ID,
  PHOTO_FEEDS_REQUEST_CARDS,
  PHOTO_FEEDS_REQUEST_FINISHED,
  PHOTO_FEEDS_SCRAPED_ID_RECEIVED,
  PHOTO_FEEDS_TOAST_MESSAGE,
  PHOTO_FEEDS_UNCHECK_ONLY_SCRAPED,
} from "./action"
import {PhotoFeedState} from "./types"

const initialPhotoFeedState: PhotoFeedState = {
  toastMessage: "",
  cards: [],
  currentPageNumber: 0,
  isCardsLoading: false,
  isShowOnlyScraped: false,
  hasMore: true,
  scrapedIds: new Set(),
}

const reducer = handleActions(
  {
    [PHOTO_FEEDS_CARDS_RECEIVED]: (state, {payload}) =>
      produce(state, draft => {
        console.log("payload", payload)
        draft.cards = [
          ...draft.cards,
          ...payload.cards
        ]
        draft.currentPageNumber = payload.currentPageNumber
      }),
    [PHOTO_FEEDS_CHECK_ONLY_SCRAPED]: (state) =>
      produce(state, draft => {
        draft.isShowOnlyScraped = true
      }),
    [PHOTO_FEEDS_UNCHECK_ONLY_SCRAPED]: (state) =>
      produce(state, draft => {
        draft.isShowOnlyScraped = false
      }),
    [PHOTO_FEEDS_HAS_MORE]: (state) =>
      produce(state, draft => {
        draft.hasMore = false
      }),
    [PHOTO_FEEDS_SCRAPED_ID_RECEIVED]: (state, {payload}) =>
      produce(state, draft => {
        draft.scrapedIds = payload.scrapedIds
      }),
    [PHOTO_FEEDS_ADD_SCRAPED_ID]: (state, {payload}: {payload: any}) =>
      produce(state, draft => {
        draft.scrapedIds = new Set(draft.scrapedIds.add(payload.id))
      }),
    [PHOTO_FEEDS_REMOVE_SCRAPED_ID]: (state, {payload}: {payload: any}) =>
      produce(state, draft => {
        draft.scrapedIds.delete(payload.id)
        draft.scrapedIds = new Set(draft.scrapedIds)
      }),
    [PHOTO_FEEDS_REQUEST_CARDS]: state =>
      produce(state, draft => {
        draft.isCardsLoading = true
      }),
    [PHOTO_FEEDS_REQUEST_FINISHED]: state =>
        produce(state, draft => {
          draft.isCardsLoading = false
      }),
    [PHOTO_FEEDS_TOAST_MESSAGE]: (state, {payload: {toastMessage}}) =>
        produce(state, draft => {
          draft.toastMessage = toastMessage
      }),
  },
  initialPhotoFeedState
)

export default reducer
