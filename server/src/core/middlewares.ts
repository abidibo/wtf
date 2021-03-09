import {Request, Response, NextFunction} from 'express'

/**
 * Logger Middleware
 * Prints to stdout a line for every received request
 * Example:
 * Tue, 09 Mar 2021 14:28:11 GMT [GET] /user/1
 *
 * @TODO implement a file logger middleware
 * https://github.com/log4js-node/log4js-node
 */
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toUTCString()} [${req.method}] ${req.originalUrl}`)
  next()
}
