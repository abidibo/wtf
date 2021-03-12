import React from "react"
import { Route, Switch } from "react-router"
import { ConnectedRouter } from "connected-react-router"
import history from "../history"
import config from '../Config'
// Views
import DashboardView from "../Views/DashboardView"
import UserDetailView from "../Views/UserDetailView"
import PageNotFoundView from "../Views/PageNotFoundView"

/**
 * App routing
 * Define here all views my friend
 */
const AppRouter: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={config.paths.dashboard}>
        <DashboardView />
      </Route>
      <Route exact path={config.paths.userDetail}>
        <UserDetailView />
      </Route>
      <Route>
        <PageNotFoundView />
      </Route>
    </Switch>
  </ConnectedRouter>
)

export default AppRouter
