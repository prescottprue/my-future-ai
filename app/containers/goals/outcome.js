import React from 'react'
import { SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

import PageHeading from '../../components/PageHeading'
import OutcomeForm from '../../components/OutcomeForm'

import DatabaseHelper from '../../utils/DatabaseHelper'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid,
        // Goal ID
        gid = props.params.id

  return ({
    uid,
    gid,
    goal: helpers.dataToJS(state.firebase, DatabaseHelper.getUsersSingleGoalPath(uid, gid)),
  })
})
@firebaseConnect((props) => ([
  DatabaseHelper.getUsersSingleGoalPath(props.uid, props.gid),
]))
export default class GoalOutcomeContainer extends React.Component {
  handleSubmit (values) {
    if (values.outcome === undefined) {
      throw new SubmissionError({ outcome: 'Outcome field is required' })
    }

    this.props.firebase.update(
      DatabaseHelper.getUsersSingleGoalPath(this.props.uid, this.props.gid),
      { ...values, outcomeSet: this.props.firebase.database.ServerValue.TIMESTAMP }
    )

    this.props.router.push(`/goals/${this.props.gid}`)
  }
  render () {
    return (
      <div>
        <PageHeading image="idea">Desired outcome</PageHeading>
        <OutcomeForm onSubmit={ this.handleSubmit.bind(this) } initialValues={ this.props.goal }/>
      </div>
    )
  }
}