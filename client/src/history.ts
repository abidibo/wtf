/**
 * This file exixts in order to export the history instance
 * that can be used directly to push new paths, i.e.:
 * history.push('/login')
 */
import * as history from 'history'
const createHistory = history.createBrowserHistory
export default createHistory()
