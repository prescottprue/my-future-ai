import React from 'react'
import AuthContainer from '../containers/AuthContainer'

import { firebaseConnect, helpers } from 'react-redux-firebase'
import { connect } from 'react-redux'

@firebaseConnect()
@connect(({ firebase }) => ({
    authError: helpers.pathToJS(firebase, 'authError'),
    auth: helpers.pathToJS(firebase, 'auth'),
    profile: helpers.pathToJS(firebase, 'profile')
}))
export default class MainContainer extends React.Component {

  render () {
    if (this.props.auth === null || undefined) {
      return <AuthContainer />
    }
    return <div>{ this.props.children }</div>
  }
}