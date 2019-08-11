import {combineReducers} from "redux"

import photoFeedState from "../../containers/photoFeed/reducer"
import RootState from "./state"

export default combineReducers<RootState>({
  photoFeedState,
})
