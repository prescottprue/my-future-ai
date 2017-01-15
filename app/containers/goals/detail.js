import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, InputGroup, Input, InputGroupButton, Button } from 'reactstrap'

import PageHeading from '../../components/PageHeading'
import Loading from '../../components/Loading'
import SimpleList from '../../components/SimpleList'
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
  actionDone (id) {
    this.props.firebase.update(DatabaseHelper.getGoalAction(this.props.gid, id), {
      done: true,
      doneSet: this.props.firebase.database.ServerValue.TIMESTAMP
    })
  }

  actionDelete (id) {
    this.props.firebase.remove(DatabaseHelper.getGoalAction(this.props.gid, id))
  }

  goalDone () {
    this.props.firebase.update(DatabaseHelper.getUsersSingleGoalPath(this.props.uid, this.props.gid), { done: true, doneSet: this.props.firebase.database.ServerValue.TIMESTAMP })
  }

  render () {
    let actionsFilters = [
      function(item) { return item.done === true }
    ]

    let actions = [
      { type: 'DONE', func: this.actionDone.bind(this), image: 'verification-checkmark-symbol' },
      { type: 'DELETE', func: this.actionDelete.bind(this), image: 'trash-can-black-symbol' }
    ]

    if (this.props.goal === undefined) { return <Loading /> }
    return (
      <div>
        <PageHeading sub="This is a detailed view of your goal and action plan.">{ this.props.goal.text }</PageHeading>
        { this.props.goal.outcome &&
          <div>
            <p className="mb-0"><b>Desired outcome</b> (<Link to={ `/goals/${this.props.gid}/outcome` }>Edit</Link>) </p>
            <p>{ this.props.goal.outcome }</p>
          </div>
        }
        { this.props.actions &&
          <div>
            <p className="mb-0"><b>Actions</b> (<Link to={ `/goals/${this.props.gid}/actions` }>Add more actions</Link>)</p>
            <SimpleList
              items={ this.props.actions }
              sort={{ property: "cdate", ascending: false }}
              filters={ actionsFilters }
              actions={ actions }
            />
          </div>
        }
        { ( ! this.props.goal.outcome || ! this.props.actions ) && <hr /> }
        { !this.props.goal.outcome && <Link to={ `/goals/${this.props.gid}/outcome` }>Describe desired outcome</Link> }
        { !this.props.actions &&
          <div>
            <br />
            <Link to={ `/goals/${this.props.gid}/actions` }>Add actions</Link>
          </div>
        }
        <hr />
        <DateTime text="Created on" time={ this.props.goal.cdate } />
        <DateTime text="Selected as primary on" time={ this.props.goal.primarySet } />
      </div>
    )
  }
}
        // <Link to={ `/` } onClick={ this.goalDone.bind(this) }>Mark goal as achieved</Link>