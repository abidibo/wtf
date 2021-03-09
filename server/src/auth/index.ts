import AuthRouter from './router'

/**
 * Just a convenience export which collects many app features in a single object
 */
export default {
    router: new AuthRouter().router
}
