import {applyMiddleware, compose, createStore} from "redux"
import createSagaMiddleware from "redux-saga"

import reducers from "./reducers"
import rootSaga from "./rootSaga"
import RootState from "./state"

const isProduct = process.env.NODE_ENV === "production"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = isProduct
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configure(initialState: RootState | {} = {}) {

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )

  sagaMiddleware.run(rootSaga)

  return store
}
