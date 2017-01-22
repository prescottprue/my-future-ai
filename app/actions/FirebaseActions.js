import { helpers, getFirebase } from 'react-redux-firebase'
import store from '../store'

import DH from '../utils/DatabaseHelper'


export function updateAction(gid, aid, action) {
  getFirebase().update(DH.getGoalAction(gid, aid), action)
}

export function updateGoal(gid, update) {
  getFirebase().update(DH.getUsersSingleGoalPath(gid), update)
}

export function addGoal(text) {
  const uid = getFirebase().auth().currentUser.uid,
        timestamp = getFirebase().database.ServerValue.TIMESTAMP,
        goal = {
          text,
          done: false,
          primary: false,
          cdate: timestamp,
          uid
        }

  getFirebase().push(DH.getGoals(), goal)
}

export function deleteGoal(gid) {
  getFirebase().remove(DH.getUsersSingleGoalPath(gid))
}

export function updateTutorial(tutorial) {
  const uid = getFirebase().auth().currentUser.uid
  getFirebase().update(`/users/${uid}/tutorial`, tutorial)
}