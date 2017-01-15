import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, InputGroup, Input, InputGroupButton, Button } from 'reactstrap'

import PageHeading from '../../components/PageHeading'
import SimpleList from '../../components/SimpleList'

@connect((state, props) => {
  const gid = props.params.id

  return ({
    gid,
    actions: helpers.dataToJS(state.firebase, `goals_actions/${gid}`),
  })
})
@firebaseConnect((props) => ([
  `goals_actions/${props.gid}`
]))
export default class GoalActionsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {newAction: ''};
  }

  handleChange(event) {
    this.setState({newAction: event.target.value});
  }

  handleAdd () {
    this.props.firebase.push(`/goals_actions/${this.props.gid}`, {
      text: this.state.newAction,
      done: false,
      cdate: this.props.firebase.database.ServerValue.TIMESTAMP,
      priority: 1
    })
    this.state.newAction = ''
  }

  render () {
    return (
      <Container>
        <PageHeading image="list" sub="The list of steps you could take to achieve your goal.">List goal actions</PageHeading>
        <InputGroup className="mt-1">
          <Input style={{ padding: '.75rem 1.25rem' }} name="add" placeholder="I want to..." value={this.state.newAction} onChange={this.handleChange.bind(this)}/>
          <InputGroupButton onClick={ this.handleAdd.bind(this) }>Add</InputGroupButton>
        </InputGroup>
        <Row className="mt-1">
          <Col xs="12">
            <SimpleList goals={ this.props.actions }/>
          </Col>
        </Row>
        <Link className="float-xs-right" to={ `/goals/${this.props.gid}` }><Button outline color="primary">Done</Button></Link>
      </Container>
    )
  }
}