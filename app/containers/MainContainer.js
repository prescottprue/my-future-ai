import React from 'react'

import AuthContainer from '../containers/AuthContainer'

import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
@connect(({ firebase }) => ({ auth: helpers.pathToJS(firebase, 'auth') }))
@firebaseConnect((props) => ([]))
export default class MainContainer extends React.Component {
  updateUser () {
    if (this.props.auth === undefined || this.props.auth === null) { return }
    this.props.firebase.update(`/users/${this.props.auth.uid}`, {
      displayName: this.props.auth.displayName,
      email: this.props.auth.email,
      photo: this.props.auth.photoURL,
    })
  }
  render () {
    this.updateUser.call(this)

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