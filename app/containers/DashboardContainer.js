import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Row, Col, Button, FormGroup, Label, Input } from 'reactstrap'

import PageHeading from '../components/PageHeading'


@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid

  return ({
    uid: uid,
    goals: helpers.dataToJS(state.firebase, 'goals'),
  })
})
@firebaseConnect((props) => ([
  `/goals#orderByChild=uid&equalTo=${ props.uid }`
]))
export default class DashboardContainer extends React.Component {

  handleAdd () {
    // Add a new todo to firebase
    this.props.firebase.push('/goals', {
      text: this.refs.newTodo.value,
      done: false,
      primary: false,
      uid: this.props.uid
    })
    this.refs.newTodo.value = ''
  }

  toggleDone (id, status) {
    this.props.firebase.update(`/goals/${id}`, { done: !status })
  }

  render () {
    const { goals } = this.props
    let goalsList = undefined

    switch(goals) {
      case undefined:
        goalsList = 'Loading'
        break

      case null:
        goalsList = 'Goals list is empty'
        break

      default:
        goalsList = Object.keys(goals).map((goalId) => {
          return (
            <FormGroup key={ goalId } check>
              <Label check>
                <Input type="checkbox" name={ goalId } checked={ goals[goalId].done } onChange={ this.toggleDone.bind(this, goalId, goals[goalId].done) }/>{' '}
                { goals[goalId].text }
                <br />
                <small className="text-muted">Additional information</small>
              </Label>
            </FormGroup>
          )
        })
    }

    return (
      <div>
        <PageHeading>Your goals</PageHeading>

        <FormGroup tag="fieldset">
          <input type="text" ref="newTodo" />
          <button onClick={ this.handleAdd.bind(this) }>
            Add
          </button>
          { goalsList }
        </FormGroup>
      </div>
    )
  }
}