import { getFirebase } from 'react-redux-firebase'
import store from '../store'

import DatabaseHelper from '../utils/DatabaseHelper'

export function updateAction(gid, aid, action) {
  getFirebase().update(DatabaseHelper.getGoalAction(gid, aid), action)
}