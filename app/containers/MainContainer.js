import React from 'react'
import { connect } from 'react-redux'
import { helpers } from 'react-redux-firebase'

import AuthContainer from '../containers/AuthContainer'

@connect(({ firebase }) => ({ auth: helpers.pathToJS(firebase, 'auth') }))
export default class MainContainer extends React.Component {
  render () {
    switch(this.props.auth) {
      case undefined:
        return <div>Loading...</div>
      case null:
        return <AuthContainer />
      default:
        return <div>{ this.props.children }</div>
    }
  }
}