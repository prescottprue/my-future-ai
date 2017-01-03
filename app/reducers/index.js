import { combineReducers } from 'redux';

import navigation from './navigationReducer';
import goals from './goalsReducer';
import connections from './connectionsReducer';
import user from './userReducer';

export default combineReducers({
  navigation,
  goals,
  connections,
  user
});