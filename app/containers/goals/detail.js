import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, InputGroup, Input, InputGroupButton, Button } from 'reactstrap'

// Components
import PageHeading from '../../components/PageHeading'
import Loading from '../../components/Loading'
import SimpleList from '../../components/SimpleList'
import DateTime from '../../components/DateTime'
import ActionModal from '../../components/ActionModal'

// Helpers
import DatabaseHelper from '../../utils/DatabaseHelper'

// Actions
import { updateAction } from '../../actions/FirebaseActions'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid,
        // Goal ID
        gid = props.params.id

  return ({
    uid,
    gid,
    goal: helpers.dataToJS(state.firebase, DatabaseHelper.getUsersSingleGoalPath(gid)),
    actions: helpers.dataToJS(state.firebase, 'actions')
  })
})

@firebaseConnect((props) => ([
  DatabaseHelper.getUsersSingleGoalPath(props.gid),
  DatabaseHelper.getGoalActions(props.gid)
]))

export default class GoalContainer extends React.Component {
  constructor () {
    super()
    this.state = { modal: false, item: null }
  }

  toggle (item) {
    if (this.state.modal === true) {
      this.setState({ modal: false })
    } else {
      this.setState({ modal: true, item: item })
    }
  }

  actionDone (item) {
    updateAction(this.props.gid, item.key, {
      done: true,
      doneSet: this.props.firebase.database.ServerValue.TIMESTAMP
    })
  }

  actionDelete () {
    this.props.firebase.remove(DatabaseHelper.getGoalAction(this.props.gid, this.state.item.key ))
    this.toggle()
  }

  actionEdit (form) {
    let editedAction = { ...form }
    editedAction.priority = parseInt(editedAction.priority)
    delete editedAction.key

    updateAction(this.props.gid, form.key, editedAction)
    this.toggle()
  }

  goalDone () {
    this.props.firebase.update(DatabaseHelper.getUsersSingleGoalPath(this.props.uid, this.props.gid), { done: true, doneSet: this.props.firebase.database.ServerValue.TIMESTAMP })
  }

  reducePriority(target) {
    return (target.priority > 1) ? target.priority - 1 : 1
  }

  increasePriority(target) {
    return (target.priority < 9) ? target.priority + 1 : 9
  }

  endDragAction (draggedItem, dropTarget) {
    if (dropTarget === null || draggedItem.key === dropTarget.key) { return }
    let increase = ((dropTarget.priority > draggedItem.priority) || (dropTarget.priority === draggedItem.priority && dropTarget.cdate < draggedItem.cdate))
    let update = { priority: (increase) ? this.increasePriority(dropTarget) : this.reducePriority(dropTarget) }

    updateAction(this.props.gid, draggedItem.key, update)
  }

  render () {
    let actionsFilters = [
      function(item) { return item.done === true }
    ]

    let actionsSort = [
      (o) => { return o.priority },
      (o) => { return o.cdate }
    ]

    let sortOrder = [
      "desc",
      "asc"
    ]

    let actions = [
      { func: this.actionDone.bind(this), image: 'verification-checkmark-symbol' },
      { func: this.toggle.bind(this), image: 'pencil-edit' }
    ]

    let dndActions = {
      'endDrag': this.endDragAction.bind(this)
    }

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
              sort={ actionsSort }
              sortOrder={ sortOrder }
              filters={ actionsFilters }
              actions={ actions }
              dndActions={ dndActions }
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

        <ActionModal
          isOpen={ this.state.modal }
          toggle={ this.toggle.bind(this) }
          danger={ this.actionDelete.bind(this) }
          onSubmit={ this.actionEdit.bind(this) }
          initialValues={ this.state.item }
        >
        </ActionModal>
      </div>
    )
  }
}
        // <Link to={ `/` } onClick={ this.goalDone.bind(this) }>Mark goal as achieved</Link>