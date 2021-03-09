import { loggerMiddleware } from "./core/middlewares";
import auth from "./auth";

const settings = {
  installedApps: [auth],
  middlewares: [loggerMiddleware],
};

export default settings;
