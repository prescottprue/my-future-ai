import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Collapse } from 'reactstrap'

// Componenets
import ListTool from '../../components/tools/list'
import SimpleList from '../../components/SimpleList'
import PageHeading from '../../components/PageHeading'
import ActionsGroup from '../../components/ActionsGroup'
import ConfirmationModal from '../../components/ConfirmationModal'

// Helpers
import DatabaseHelper from '../../utils/DatabaseHelper'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid

  return ({
    uid: uid,
    goals: helpers.dataToJS(state.firebase, DatabaseHelper.getUserGoalsPath(uid)),
  })
})
@firebaseConnect((props) => ([ DatabaseHelper.getUserGoalsPath(props.uid) ]))
export default class TutorialFirstStep extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      collapse: true,
      actions: [
        { func: this.toggle.bind(this), text: "Let's do this!" },
        // { link: "/tutorial/first#", text: "Why should I do this? (not working yet)" },
        // { link: "/tutorial/first#", text: "Where's the science? (not working yet)" },
      ]
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.state.actions.splice(0, 1, { link: "/tutorial/second", text: "Go to Step 2" })
    this.setState({ ...this.state, collapse: !this.state.collapse });
  }

  toggleModal (item) {
    this.setState({ ...this.state, modal: !this.state.modal, item })
  }


  handleAdd (newGoal) {
    // Add a new todo to firebase
    this.props.firebase.push(DatabaseHelper.getUserGoalsPath(this.props.uid), {
      text: newGoal,
      done: false,
      primary: false,
      cdate: this.props.firebase.database.ServerValue.TIMESTAMP
    })
  }

  actionDelete () {
    this.props.firebase.remove(DatabaseHelper.getUsersSingleGoalPath(this.props.uid, this.state.item.key))
    this.toggleModal()
  }

  render () {
    let actions = [
      { func: this.toggleModal.bind(this), image: 'trash-can-black-symbol' },
    ]

    return (
      <div>
        <PageHeading image="edit" sub="Step 1" top>List</PageHeading>

        <Collapse isOpen={ this.state.collapse }>
          <p>Start by making an inventory of your dreams, the things you want to have, do, be, and share.</p>
          <p><b>Tips:</b></p>
          <ul>
            <li>Spend at least <b>10 to 15 minutes</b>.</li>
            <li>Skip the "how can I do this?" part.</li>
            <li><b>Abbreviate</b> whenever possible.</li>
          </ul>
        </Collapse>

        <Collapse isOpen={ ! this.state.collapse }>
          <ListTool handleAdd={ this.handleAdd.bind(this) }>
            <SimpleList
              items={ this.props.goals }
              actions={ actions }
            />
          </ListTool>
        </Collapse>

        <ConfirmationModal isOpen={ this.state.modal } danger={ this.actionDelete.bind(this) } toggle={ this.toggleModal.bind(this) }>
          Are you sure you want to delete this goal?
        </ConfirmationModal>

        <ActionsGroup actions={ this.state.actions } />
      </div>
    )
  }
}
          // <InputGroup className="mt-1">
            // <Input style={{ padding: '.75rem 1.25rem' }} name="add" placeholder="I want to..." value={this.state.newGoal} onChange={this.handleChange.bind(this)}/>
            // <InputGroupButton onClick={ this.handleAdd.bind(this) }>Add</InputGroupButton>
          // </InputGroup>

          // <SimpleList items={ this.props.goals }/>
        // <p>
        //   One key to goal setting is play. Let your mind roam free. Whatever limitations you have are limitations you’ve created. Where do they exist? Only in your mind. So whenever you start to place limitations on yourself, throw them off. Do it visually. Make a picture in your mind of a wrestler flipping his opponent out of the ring, and then do the same thing with whatever limits you. Take those limiting beliefs and toss them out of the ring, and be aware of the feeling of freedom you have when you do it.

        //   Create the people, feelings, and places you want to be a part of your life.
        // </p>
        // <p>
        //   When you know your outcome, you give your brain a clear picture of which kinds of information being received by the nervous system need high priority. You give it the clear messages it needs to be effective.
        // </p>

        // <DoneButton link={ (this.props.router.goBack) ? this.props.router.goBack : '/goals' } />