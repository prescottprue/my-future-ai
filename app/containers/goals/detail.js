import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, InputGroup, Input, InputGroupButton, Button } from 'reactstrap'

import PageHeading from '../../components/PageHeading'
import Loading from '../../components/Loading'
import CheckboxList from '../../components/CheckboxList'
import DateTime from '../../components/DateTime'

import DatabaseHelper from '../../utils/DatabaseHelper'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid,
        // Goal ID
        gid = props.params.id

  return ({
    uid,
    gid,
    goal: helpers.dataToJS(state.firebase, DatabaseHelper.getUsersSingleGoalPath(uid, gid)),
    actions: helpers.dataToJS(state.firebase, DatabaseHelper.getGoalActions(gid))
  })
})

@firebaseConnect((props) => ([
  DatabaseHelper.getUsersSingleGoalPath(props.uid, props.gid),
  DatabaseHelper.getGoalActions(props.gid)
]))

export default class GoalContainer extends React.Component {
  actionDone (id, status) {
    let object = {
      done: ! status
    }
    if (status === false) { object.doneSet = this.props.firebase.database.ServerValue.TIMESTAMP }

    this.props.firebase.update(DatabaseHelper.getGoalAction(this.props.gid, id), object)
  }

  goalDone () {
    this.props.firebase.update(DatabaseHelper.getUsersSingleGoalPath(this.props.uid, this.props.gid), { done: true, doneSet: this.props.firebase.database.ServerValue.TIMESTAMP })
  }

  render () {
    if (this.props.goal === undefined) { return <Loading /> }
    return (
      <div>
        <PageHeading sub="This is a detailed view of your goal and action plan.">{ this.props.goal.text }</PageHeading>
        { this.props.goal.outcome && <div><p className="mb-0"><b>Desired outcome</b></p><p>{ this.props.goal.outcome }</p></div> }
        <Row className="mt-1">
          <Col xs="12">
            <p className="mb-0"><b>Actions</b></p>
            <CheckboxList items={ this.props.actions } checkProp='done' checkHandler={ this.actionDone.bind(this) }/>
          </Col>
        </Row>
        <hr />
        <Link to={ `/goals/${this.props.gid}/actions` }>Add actions</Link>
        <br />
        <Link to={ `/goals/${this.props.gid}/outcome` }>Describe desired outcome</Link>
        <hr />
        <DateTime text="Created on" time={ this.props.goal.cdate } />
        <DateTime text="Selected as primary on" time={ this.props.goal.primarySet } />
      </div>
    )
  }
}
        // <Link to={ `/` } onClick={ this.goalDone.bind(this) }>Mark goal as achieved</Link>