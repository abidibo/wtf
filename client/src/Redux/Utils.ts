import { RootState } from "./Store"

export const selectIsFetching = (reducerName: string) => (
  state: RootState
): boolean => state[reducerName].fetching
