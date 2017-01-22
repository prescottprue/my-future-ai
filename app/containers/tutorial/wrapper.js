import React from 'react'
import { Link } from 'react-router'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

import PageHeading from '../../components/PageHeading'
import ActionsGroup from '../../components/ActionsGroup'

import { restoreTutorialProgress } from '../../actions/TutorialActions'
import { updateTutorial } from '../../actions/FirebaseActions'

import DH from '../../utils/DatabaseHelper'

// Connections
@connect(state => ({
  heading: state.tutorial.heading,
  actions: state.tutorial.actions,
  auth: helpers.pathToJS(state.firebase, 'auth'),
  goals: helpers.dataToJS(state.firebase, 'goals'),
  tutorial: state.tutorial
}))
@firebaseConnect((props) => ([ DH.getUserGoalsPath(props.auth.uid) ]))


// Class
export default class TutorialWrapper extends React.Component {
  constructor(props) {
    super(props)
    const { firebase, auth } = props
    firebase.ref(`/users/${auth.uid}/tutorial`).once('value').then((snapshot) => {
      restoreTutorialProgress(snapshot.val())
    })
  }
  componentDidUpdate() {
    if (this.props.tutorial.restored) {
      updateTutorial(this.props.tutorial.progress)
    }
  }

  render () {
    const { heading, actions, goals } = this.props

    let children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        goals: goals
      })
    })

    return (
      <Container className="my-3 tutorial-container">
        { (heading.image || heading.subtitle || heading.title) && <PageHeading image={ heading.image } sub={ heading.subtitle } top>{ heading.title }</PageHeading> }
        { children }
        <ActionsGroup actions={ actions } />
        <p className="text-muted text-center mt-3 mb-0">
          <Link to="/" className="color-inherit">Quit tutorial</Link>
        </p>
      </Container>
    )
  }
}