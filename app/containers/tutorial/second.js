import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, Collapse, InputGroup, FormGroup, Label, Input, InputGroupButton, ButtonGroup, Button } from 'reactstrap'

// Componenets
import SimpleList from '../../components/SimpleList'
import PageHeading from '../../components/PageHeading'
import ActionsGroup from '../../components/ActionsGroup'
import ConfirmationModal from '../../components/ConfirmationModal'

// Helpers
import DatabaseHelper from '../../utils/DatabaseHelper'

// Actions
import { updateGoal } from '../../actions/FirebaseActions'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid
  return ({ uid, goals: helpers.dataToJS(state.firebase, DatabaseHelper.getUserGoalsPath(uid)) })
})
@firebaseConnect((props) => ([ DatabaseHelper.getUserGoalsPath(props.uid) ]))
export default class TutorialSecondStep extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      explanation: false,
      actions: [
        { link: "/tutorial/third", text: "Go to Step 3" },
        { func: this.explanation.bind(this), text: "Why should I do this?" },
        { link: '/tutorial/first', text: "Back to Step 1" },
        // { link: "/tutorial/second#", text: "Where's the science? (not working yet)" },
      ]
    }
  }

  explanation() {
    this.state.actions.splice(1, 1)
    this.setState({ ...this.state, explanation: true })
  }

  onChange(gid, timeframe) {
    updateGoal(gid, { timeframe })
  }

  render () {
    return (
      <div>
        <PageHeading image="calendar" sub="Step 2" top>Timeframes</PageHeading>

        <p>Go over the list you made, estimating when you expect to reach those outcomes.</p>

        <SimpleList
          items={ this.props.goals }
          formItem={{ type: "select", handleChange: this.onChange.bind(this) }}
        />

        <Collapse isOpen={ this.state.explanation }>
          <p><b>Why it is neccessary that you do this</b></p>
          <p>
            It’s helpful to see what sort of a time frame you’re operating in.
          </p>
          <p>
            Note how your list came out. Some people find that the list they made is dominated by things they want today. Others find their greatest dreams are far in the future, in some imagined period of total achievement and fulfillment. If all your goals are short term, you need to start taking a longer view of potential and possibility. If all your goals are long term, you need to first develop some steps that can lead you in the direction you expect to go. A journey of a thousand miles begins with a single step. It’s important to be aware of both the first steps and the final ones.
          </p>
        </Collapse>

        <ActionsGroup actions={ this.state.actions } />
      </div>
    )
  }
}