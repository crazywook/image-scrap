import {all} from "redux-saga/effects"

import {watchPhotoFeedAction} from "../../containers/aphotoFeed/saga"

function* rootSaga() {
  yield all([
    watchPhotoFeedAction()
  ])
}

export default rootSaga
