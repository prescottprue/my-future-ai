import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'

import navigation from './navigationReducer'
import errors from './errorsReducer'
import tutorial from './tutorialReducer'

export default combineReducers({
  navigation,
  errors,
  firebase,
  tutorial,
  form: formReducer
})