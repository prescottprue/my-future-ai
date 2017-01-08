import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

import PageHeading from '../../components/PageHeading'
import CheckboxList from '../../components/CheckboxList'
import DoneButton from '../../components/DoneButton'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid

  return ({
    uid: uid,
    goals: helpers.dataToJS(state.firebase, `users/${uid}/goals`),
  })
})

@firebaseConnect((props) => ([
  `/users/${props.uid}/goals`
]))

export default class PrimaryGoalsContainer extends React.Component {
  togglePrimary (id, status) {
    this.props.firebase.update(`/users/${this.props.uid}/goals/${id}`, { primary: !status })
  }

  render () {
    return (
      <div>
        <PageHeading sub="These are the goals you would like to work on.">Select your primary goals</PageHeading>

        <CheckboxList items={ this.props.goals } checkProp='primary' checkHandler={ this.togglePrimary.bind(this) }/>

        <p><small className="text-muted">This list does not include goals you have already achieved.</small></p>
        <DoneButton link="/goals" />
      </div>
    )
  }
}