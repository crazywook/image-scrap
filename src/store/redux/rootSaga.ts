import {all} from "redux-saga/effects"

import {watchPhotoFeedAction} from "../../containers/photoFeed/saga"

function* rootSaga() {
  yield all([
    watchPhotoFeedAction()
  ])
}

export default rootSaga
