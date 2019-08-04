import {combineReducers} from "redux"

import photoFeedState from "../../containers/aphotoFeed/reducer"
import RootState from "./state"

export default combineReducers<RootState>({
  photoFeedState,
})
