import { helpers, getFirebase } from 'react-redux-firebase'
import store from '../store'

import DatabaseHelper from '../utils/DatabaseHelper'

export function updateAction(gid, aid, action) {
  getFirebase().update(DatabaseHelper.getGoalAction(gid, aid), action)
}

export function updateGoal(gid, update) {
  const uid = getFirebase().auth().currentUser.uid
  getFirebase().update(DatabaseHelper.getUsersSingleGoalPath(uid, gid), update)
}