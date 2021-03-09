import AuthRouter from "./router";
import IApp from '../core/interfaces/IApp.interface'

/**
 * Just a convenience export which collects many app features in a single object
 */
const App: IApp =  {
  router: new AuthRouter().router,
};

export default App
