import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, InputGroup, Input, InputGroupButton, Button } from 'reactstrap'

import PageHeading from '../../components/PageHeading'
import SimpleList from '../../components/SimpleList'
import DoneButton from '../../components/DoneButton'

import DatabaseHelper from '../../utils/DatabaseHelper'
import { addGoal } from '../../actions/FirebaseActions'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid

  return ({
    uid: uid,
    goals: helpers.dataToJS(state.firebase, 'goals'),
  })
})
@firebaseConnect((props) => ([
  `/goals/${props.uid}`
]))
export default class ListGoalsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {newGoal: ''};
  }

  handleChange(event) {
    this.setState({newGoal: event.target.value});
  }

  handleAdd () {
    // Add a new todo to firebase
    addGoal(this.state.newGoal)
    
    this.state.newGoal = ''
  }

  render () {
    console.log(this.props.goals);
    return (
      <Container>
        <PageHeading image="edit" sub="This is a list of your dreams, wishes and goals.">List your goals</PageHeading>
        <InputGroup className="mt-1">
          <Input style={{ padding: '.75rem 1.25rem' }} name="add" placeholder="I want to..." value={this.state.newGoal} onChange={this.handleChange.bind(this)}/>
          <InputGroupButton onClick={ this.handleAdd.bind(this) }>Add</InputGroupButton>
        </InputGroup>

        <SimpleList items={ this.props.goals }/>

        <DoneButton link={ (this.props.router.goBack) ? this.props.router.goBack : '/goals' } />
      </Container>
    )
  }
}