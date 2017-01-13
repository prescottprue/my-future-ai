import React from 'react'
import { Alert } from 'reactstrap'

require('../styles.scss')
import AuthContainer from '../containers/AuthContainer'

import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
@connect(({ firebase }) => ({ auth: helpers.pathToJS(firebase, 'auth') }))
@firebaseConnect((props) => ([]))
export default class MainContainer extends React.Component {
  updateUser () {
    const { firebase, auth } = this.props

    if (auth === undefined || auth === null) { return }

    firebase.update(`/users/${auth.uid}`, {
      displayName: auth.displayName,
      email: auth.email,
      photo: auth.photoURL,
    })

    firebase.ref('.info/connected').on('value', function(connectedSnap) {
      if (connectedSnap.val() === false) { return }

      firebase.update(`/users/${auth.uid}`, { online:  true, lastSeen: null })
    });

    firebase.ref(`/users/${auth.uid}`).onDisconnect().update({ online:  false, lastSeen: firebase.database.ServerValue.TIMESTAMP })
  }
  render () {
    this.updateUser.call(this)


    switch(this.props.auth) {
      case undefined:
        return <div>Loading...</div>
      case null:
        return (
          <div>
            <AuthContainer />
          </div>
        )
      default:
        return <div>{ this.props.children }</div>
    }
  }
}