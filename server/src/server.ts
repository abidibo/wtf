import App from './app'
import settings from './settings'


/**
 * Entry point
 */
const app = new App({
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    apps: settings.installedApps,
    middleWares: settings.middlewares
})

// avoid listening when running tests
if (process.env.NODE_ENV !== 'test') {
    app.listen()
}

export default app
