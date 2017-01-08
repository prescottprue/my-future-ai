import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, InputGroup, Input, InputGroupButton, Button } from 'reactstrap'

import PageHeading from '../../components/PageHeading'
import Loading from '../../components/Loading'
import CheckboxList from '../../components/CheckboxList'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid,
        gid = props.params.id

  return ({
    uid,
    gid,
    goal: helpers.dataToJS(state.firebase, `users/${uid}/goals/${gid}`),
    actions: helpers.dataToJS(state.firebase, `actions/${gid}`)
  })
})

@firebaseConnect((props) => ([
  `users/${props.uid}/goals/${props.gid}`,
  `/actions/${props.gid}`
]))

export default class GoalContainer extends React.Component {
  togglePrimary (id, status) {
    this.props.firebase.update(`/actions/${this.props.gid}/${id}`, { done: !status })
  }

  markDone () {
    this.props.firebase.update(`/users/${this.props.uid}/goals/${this.props.gid}`, { done: true })
  }

  render () {
    if (this.props.goal === undefined) { return <Loading /> }
    return (
      <div>
        <PageHeading sub="This is a detailed view of your goal and action plan.">{ this.props.goal.text }</PageHeading>

        <Row className="mt-1">
          <Col xs="12">
            <CheckboxList items={ this.props.actions } checkProp='done' checkHandler={ this.togglePrimary.bind(this) }/>
          </Col>
        </Row>

        <Link to={ `/` } onClick={ this.markDone.bind(this) }>Mark goal as achieved</Link>
        <br />
        <Link to={ `/goals/${this.props.gid}/actions` }>Add actions</Link>
      </div>
    )
  }
}