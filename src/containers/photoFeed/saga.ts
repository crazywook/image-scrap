import {Action} from "redux-actions"
import {call, put, select, takeEvery} from "redux-saga/effects"

import {photoFeedStorage} from "../../lib/storage"
import {fetchPhotoFeedsCards} from "../../request/cards"
import RootState from "../../store/redux/state"
import {
  PHOTO_FEEDS_REQUEST_CARDS,
  PHOTO_FEEDS_REQUEST_SCRAPED_ID,
  PHOTO_FEEDS_TOGGLE_CARD_SCRAP,
  PHOTO_FEEDS_TOGGLE_ONLY_SCRAPED,
  PhotoFeedActions,
} from "./action"

export function* watchPhotoFeedAction() {
  yield takeEvery(PHOTO_FEEDS_REQUEST_CARDS, loadPhotoFeedsCards)
  yield takeEvery(PHOTO_FEEDS_TOGGLE_ONLY_SCRAPED, toggleOnlyScrapedPhotoFeeds)
  yield takeEvery(PHOTO_FEEDS_REQUEST_SCRAPED_ID, loadPhotoFeedsScrapedId)
  yield takeEvery(PHOTO_FEEDS_TOGGLE_CARD_SCRAP, toggleCardScrap)
}

export function* toggleOnlyScrapedPhotoFeeds({payload: currentCheck}: Action<boolean>) {
  yield put(
    currentCheck
      ? PhotoFeedActions.uncheckOnlyScraped()
      : PhotoFeedActions.checkOnlyScraped()
  )
}

export function* loadPhotoFeedsCards({type, payload: {pageNumber}})
{
  const {data: graphData, error} = yield call(fetchPhotoFeedsCards, pageNumber)
  yield put(PhotoFeedActions.requestPhotoFeedsFinished())

  if (error) {
    yield put(PhotoFeedActions.requestPhotoFeedsCardsFailed())
    yield put(PhotoFeedActions.updateHasMore(false))
    return
  }

  const data = graphData.data.photo

  if (!(data && data.length)) {

    yield put(PhotoFeedActions.updateHasMore(false))
    return
  }

  console.log("saga data", data)
  yield put(PhotoFeedActions.receivePhotoFeedsCards({
    cards: data,
    currentPageNumber: pageNumber
  }))
}

export function* loadPhotoFeedsScrapedId() {
  const storageScrapedIds = photoFeedStorage.get("photoFeedsScrapedId") || "[]"

  let scrapedIdArray: number[]
  try {

    scrapedIdArray = JSON.parse(storageScrapedIds) || []
  } catch (e) {
    scrapedIdArray = []
  }

  const scrapedIds = new Set<number>(scrapedIdArray)

  yield put(PhotoFeedActions.receivePhotoFeedsScrapedId({scrapedIds}))
}

export function* toggleCardScrap({type, payload: {id}}) {
  const ids: Set<number> = yield select(({photoFeedState}: RootState) => photoFeedState.scrapedIds)

  if (ids.has(id)) {
    yield put(PhotoFeedActions.removeScrapedIds({id}))
    yield put(PhotoFeedActions.toastMessage({toastMessage: `${id}가 스크랩에서 제외되었습니다.`}))
  } else {
    yield put(PhotoFeedActions.addScrapedIds({id}))
    yield put(PhotoFeedActions.toastMessage({toastMessage: `${id}가 스크랩에 추가되었습니다.`}))
  }

  const arr = Array.from(ids)
  photoFeedStorage.set("photoFeedsScrapedId", JSON.stringify(arr))
}
