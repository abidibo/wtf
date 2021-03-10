export interface IUser {
  id: number
  first_name: string
  email: string
  gender: string
  country: string
  job_title: string
}

export interface IUserSlice {
  fetching: boolean
  fetched: boolean
  error: boolean
  errorMessage: string
  data: IUser[]
}

export const USERS_REQUEST = "users/request"
export const USERS_SUCCESS = "users/success"
export const USERS_FAILURE = "users/failure"

export interface IRequestAction {
  type: typeof USERS_REQUEST
}

export interface ISuccessAction {
  type: typeof USERS_SUCCESS
  payload: IUser[]
}

export interface IFailureAction {
  type: typeof USERS_FAILURE
  payload: string
}
