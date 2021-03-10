import express, { Application } from "express"
import cors from "cors"
var app = express()

/**
 * Main Application
 */
class App {
  public app: Application
  public port: number

  /**
   * App constructor
   */
  constructor(appInit: { port: number; middleWares: any; apps: any }) {
    this.app = express()
    // @TODO set CORS allowed hosts
    this.app.use(cors())
    this.port = appInit.port

    this.middlewares(appInit.middleWares)
    this.routes(appInit.apps)
  }

  /**
   * Attaches every defined middleware to express
   */
  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void
  }) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare)
    })
  }

  /**
   * Injects every installed app router
   */
  private routes(apps: { forEach: (arg0: (app: any) => void) => void }) {
    apps.forEach((app) => {
      this.app.use("/", app.router)
    })
  }

  /**
   * Starts listening
   */
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`)
    })
  }
}

export default App
