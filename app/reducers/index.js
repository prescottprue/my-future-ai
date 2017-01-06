import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

import navigation from './navigationReducer'
import goals from './goalsReducer'
import connections from './connectionsReducer'

export default combineReducers({
  navigation,
  goals,
  connections,
  firebase
})