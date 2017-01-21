import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { DragDropContext } from 'react-dnd'
// import HTML5Backend from 'react-dnd-html5-backend'
import { default as TouchBackend } from 'react-dnd-touch-backend'

require('../styles.scss')
import AuthContainer from '../containers/AuthContainer'
import Loading from '../components/Loading'
import MainWrapper from '../components/MainWrapper'

@connect((store) => ({ auth: helpers.pathToJS(store.firebase, 'auth'), tutorial: store.tutorial.progress }))
@firebaseConnect((props) => ([]))
// @DragDropContext(HTML5Backend)
@DragDropContext(TouchBackend({ enableMouseEvents: true }))
export default class MainContainer extends React.Component {
  componentDidUpdate () {
    const { firebase, auth, tutorial } = this.props

    if (auth === undefined || auth === null) { return }

    firebase.ref('.info/connected').on('value', (snapshot) => {
      if (snapshot.val() === false) { return }

      firebase.update(`/users/${auth.uid}`, { online:  true, lastSeen: null })
    });

    firebase.ref(`/users/${auth.uid}`).onDisconnect().update({ online:  false, lastSeen: firebase.database.ServerValue.TIMESTAMP })
  }

  render () {
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