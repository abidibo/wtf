import { combineReducers, Action } from "redux"
import {
  combineEpics,
  ActionsObservable,
  StateObservable,
} from "redux-observable"

import { Observable } from 'rxjs'
import { connectRouter } from "connected-react-router"
import { catchError } from "rxjs/operators"
import history from "../history"
// reducers and epics
import usersReducer, { fetchUsersEpic} from "./Users"

// root reducer
export const RootReducer = combineReducers({
  router: connectRouter(history),
  users: usersReducer,
})

// side effects
export const RootEpic = (
  action$: ActionsObservable<any>,
  store$: StateObservable<void>,
  dependencies: string
): Observable<Action<any>> =>
  combineEpics(
    fetchUsersEpic
  )(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )
