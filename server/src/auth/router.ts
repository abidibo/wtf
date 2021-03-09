import express, { Router } from "express";
import IRouterBase from "../core/interfaces/IRouterBase.interface";
import { list, detail } from "./views";

/**
 * Auth router
 *
 * Defines auth app available routes and links them to view functions
 */
class AuthRouter implements IRouterBase {
  public path: string = "/user";
  public router: Router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes(): void {
    this.router.get(this.path, list);
    this.router.get(`${this.path}/:id`, detail);
  }
}

export default AuthRouter;
