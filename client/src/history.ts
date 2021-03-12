/**
 * This file exixts in order to export the history instance
 * that can be used directly to push new paths, i.e.:
 * history.push('/login')
 */
import { createBrowserHistory, History } from 'history'
const history: History = createBrowserHistory()
export default history
