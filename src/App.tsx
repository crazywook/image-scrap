import * as React from "react"
import {Provider} from "react-redux"

import {PhotoFeed} from "./pages/PhotoFeed"
import {configure} from "./store/redux/reduxStore"

export const App: React.SFC<{}> = () =>
  <Provider store={configure({})}>
    <PhotoFeed>안녕하세요 이제부터 시작입니다.</PhotoFeed>
  </Provider>;
