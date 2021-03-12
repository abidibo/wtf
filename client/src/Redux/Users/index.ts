import { Action } from "redux"
import { createSlice } from "@reduxjs/toolkit"
import {
  ActionsObservable,
  ofType,
} from "redux-observable"
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { RootState } from "../Store"
import { IUser, IUserSlice, ISuccessAction, IFailureAction, USERS_REQUEST } from './Interfaces'
import Api from '../../Api'

// reducer
const usersSlice = createSlice({
  name: "users",
  initialState: {
    fetching: false,
    fetched: false,
    error: false,
    errorMessage: null,
    data: [],
  },
  reducers: {
    request: (state: IUserSlice) => {
      return { ...state, fetching: true}
    },
    success: (state: IUserSlice, action: ISuccessAction) => {
      return { ...state, fetching: false, fetched: true, error: false, errorMessage: null, data: action.payload}
    },
    failure: (state: IUserSlice, action: IFailureAction) => {
      return {...state, fetching: false, fetched: true, error: true, errorMessage: action.payload, data: []}
    }
  },
})

export const {
  request,
  success,
  failure,
} = usersSlice.actions

export default usersSlice.reducer

export const selectUsers = (state: RootState): IUser[] => state.users.data

// side effects
export const fetchUsersEpic = (action$: ActionsObservable<Action>) => action$.pipe(
  ofType(USERS_REQUEST),
  mergeMap(() =>
    ajax.getJSON(Api.users).pipe(
      map((response: any) => success(response)),
      catchError((err) => {
        // @TODO show a toast
        alert(`Cannot fetch users: ${err.message}`)
        return of(failure(`Cannot fetch users: ${err.message}`))
      })
    )
  )
);
