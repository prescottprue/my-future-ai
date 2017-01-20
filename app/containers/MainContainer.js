import React from 'react'

import { DragDropContext } from 'react-dnd'
// import HTML5Backend from 'react-dnd-html5-backend'
import { default as TouchBackend } from 'react-dnd-touch-backend'

require('../styles.scss')
import AuthContainer from '../containers/AuthContainer'
import Loading from '../components/Loading'
import MainWrapper from '../components/MainWrapper'

import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
@connect(({ firebase }) => ({ auth: helpers.pathToJS(firebase, 'auth') }))
@firebaseConnect((props) => ([]))
// @DragDropContext(HTML5Backend)
@DragDropContext(TouchBackend({ enableMouseEvents: true }))
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
        return (
          <MainWrapper>
            <Loading />
          </MainWrapper>
        )
      case null:
        return (
          <MainWrapper>
            <AuthContainer />
          </MainWrapper>
        )
    }

    return (
      <MainWrapper>
        { this.props.children }
      </MainWrapper>
    )
  }
}