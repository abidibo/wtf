import { Request, Response } from 'express'

/**
 * Simple view decorator. It sends a 404 response if the view returns undefined.
 * It takes a custom messages to be transmitted.
 *
 * Example:
 *
 * const myView = res404IfUndefined('Not found')((req, res) => { return undefined; })
 */
export const res404IfUndefined = (message: String): Function => (view: Function): Function => (req: Request, res: Response): void => {
    const data = view(req, res)
    data ? res.send(data) : res.status(404).send({ message })
}
