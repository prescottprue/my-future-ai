import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Row, Col, Button, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router'

import PageHeading from '../components/PageHeading'
import CheckboxList from '../components/CheckboxList'
import Loading from '../components/Loading'
import LinkedList from '../components/LinkedList'
import ActionsCardsList from '../components/ActionsCardsList'
import GoalCard from '../components/GoalCard'

import DatabaseHelper from '../utils/DatabaseHelper'

const { pathToJS, dataToJS, isLoaded, isEmpty } = helpers

@connect((state, props) => {
  const uid = pathToJS(state.firebase, 'auth').uid

  return ({
    uid: uid,
    goals: dataToJS(state.firebase, 'goals'),
  })
})
@firebaseConnect((props) => {
  return [ DatabaseHelper.getUserGoalsPath(props.uid) ]
})
export default class DashboardContainer extends React.Component {
  toggleDone (id, status) {
    this.props.firebase.update(DatabaseHelper.getUsersSingleGoalPath(this.props.uid, id), { done: !status })
  }

  render () {
    const { goals } = this.props
    let goalsList

    let links = [
      { title: 'Tutorial', link: 'tutorial', image: 'brightness' },
      { title: 'Tools', link: 'goals', image: 'loupe' }
    ]

    if (goals === undefined) {
      return (
        <div>
          <PageHeading image="flag" sub="This is a list of your primary goals, which haven't been completed. Yet.">Your goals</PageHeading>
          <Loading />
        </div>
      )
    }

    goalsList = []

    _.each(goals, (goal, key) => {
      // Remove goals which are not primary
      if (goal.primary === false) { return }

      // Remove goals which are achieved
      if (goal.done === true) { return }

      goalsList.push({
        title: goal.text,
        id: key
      })
    })

    return (
      <div className="mb-3">
        <PageHeading image="flag" sub="This is a list of your primary goals, which haven't been completed. Yet.">Your goals</PageHeading>
        { goalsList.map((goal, index) => {
          return <GoalCard key={ index } goal={ goal } />
        })}
        <hr />
        <ActionsCardsList data={links} />
      </div>
    )
  }
}