import React from "react"
import { Route, Switch } from "react-router"
import { ConnectedRouter } from "connected-react-router"
import history from "../history"
// Views
import DashboardView from "../Views/DashboardView"

/**
 * App routing
 * Define here all views my friend
 */
const AppRouter: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/">
        <DashboardView />
      </Route>
    </Switch>
  </ConnectedRouter>
)

export default AppRouter
