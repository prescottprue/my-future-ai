import { combineReducers } from 'redux';

import navigation from './navigationReducer';
import goals from './goalsReducer';

export default combineReducers({
  navigation,
  goals
});