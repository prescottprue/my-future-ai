import { applyMiddleware, createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import logger from 'redux-logger'

import reducer from './reducers'

const middleware = applyMiddleware(logger({ collapsed: true }))

// Firebase config
const fbConfig = {
  apiKey: "AIzaSyBFg96siHdoFLYzpEx7j_uVPIUCtXI3twk",
  authDomain: "dreams-center.firebaseapp.com",
  databaseURL: "https://dreams-center.firebaseio.com",
  storageBucket: "dreams-center.appspot.com",
  messagingSenderId: "854775952132"
}

const config = {
  userProfile: 'users',
  updateProfileOnLogin: true
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(fbConfig, config),
)(createStore)

// Create store with reducers
export default createStoreWithFirebase(reducer, middleware)