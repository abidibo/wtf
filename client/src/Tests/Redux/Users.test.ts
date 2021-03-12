import {
  request,
  success,
  failure,
  fetchUsersEpic,
} from "../../Redux/Users"
import { TestScheduler } from "rxjs/testing"
import { ActionsObservable } from "redux-observable"
import { from, throwError } from 'rxjs'

window.alert = jest.fn()
jest.mock('rxjs/ajax', () => ({
  ajax: {
    getJSON: jest.fn()
      .mockImplementationOnce(() => from([[user1]]))
      .mockImplementationOnce(() => throwError({ message: '404' }))
  }
}))

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual[0].notification.value).toEqual(expected[0].notification.value)
})

const user1 = {
  id: 1,
  first_name: "gino",
  email: "gino@pino.it",
  gender: "male",
  country: "Italy",
  job_title: "physician",
}

const user2 = {
  id: 2,
  first_name: "jeff",
  email: "jeff@buckley.ru",
  gender: "male",
  country: "USA",
  job_title: "musician",
}

describe("Users Reducer", () => {
  it("should define the right actions", () => {
    expect(request()).toEqual({ type: "users/request" })
    expect(success([user1, user2])).toEqual({
      type: "users/success",
      payload: [user1, user2],
    })
    expect(failure("bad news")).toEqual({
      type: "users/failure",
      payload: "bad news",
    })
  })

  it("should dispatch success after succesfull request", () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const actionInput$ = hot("-a", { a: request() })
      const action$ = new ActionsObservable(actionInput$)
      const output$ = fetchUsersEpic(action$)
      expectObservable(output$).toBe("--a", { a: success([user1]) })
    })
  })

  it("should dispatch failure after error request", (done) => {
    jest.mock('rxjs/ajax', () => ({
      ajax: {
        getJSON: () => throwError({message: '404'})//from([[user1], [user2]])
      }
    }))
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const actionInput$ = hot("-a", { a: request() })
      const action$ = new ActionsObservable(actionInput$)
      const output$ = fetchUsersEpic(action$)

      const calls = (window.alert as jest.Mock).mock.calls; // avoid typeing errors
      expect(calls.length).toBe(0)
      expectObservable(output$).toBe("--a", { a: failure('Cannot fetch users: 404') })
      setTimeout(() => {
        expect(calls.length).toBe(1)
        expect(calls[0][0]).toBe('Cannot fetch users: 404')
        done()
      }, 1000)
    })
  })
})
