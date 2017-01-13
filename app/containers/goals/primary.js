import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

import PageHeading from '../../components/PageHeading'
import CheckboxList from '../../components/CheckboxList'
import DoneButton from '../../components/DoneButton'

import DatabaseHelper from '../../utils/DatabaseHelper'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid

  return ({
    uid: uid,
    goals: helpers.dataToJS(state.firebase, DatabaseHelper.getUserGoalsPath(uid)),
  })
})

@firebaseConnect((props) => ([
  DatabaseHelper.getUserGoalsPath(props.uid)
]))

export default class PrimaryGoalsContainer extends React.Component {
  togglePrimary (id, status) {
    let object = {
      primary: ! status
    }
    if (status === false) { object.primarySet = this.props.firebase.database.ServerValue.TIMESTAMP }

    this.props.firebase.update(DatabaseHelper.getUsersSingleGoalPath(this.props.uid, id), object)
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