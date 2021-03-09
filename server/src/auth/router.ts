import * as express from 'express'
import IRouterBase from '../core/interfaces/IRouterBase.interface'
import {list, detail} from './views'

/**
 * Auth router
 *
 * Defines auth app available routes and links them to view functions
 */
class AuthRouter implements IRouterBase {
    public path = '/user'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, list)
        this.router.get(`${this.path}/:id`, detail)
    }
}

export default AuthRouter
