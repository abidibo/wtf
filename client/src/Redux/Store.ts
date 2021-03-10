import { configureStore, EnhancedStore } from "@reduxjs/toolkit"
import { RootReducer, RootEpic } from "./Root"
import { routerMiddleware } from "connected-react-router"
import { createEpicMiddleware } from "redux-observable"
import history from "../history"

export type RootState = ReturnType<typeof RootReducer>

// side effects
const epicMiddleware = createEpicMiddleware()

const store: EnhancedStore = configureStore({
  reducer: RootReducer,
  middleware: [routerMiddleware(history), epicMiddleware],
})

epicMiddleware.run(RootEpic)

export type AppDispatch = typeof store.dispatch
export default store
