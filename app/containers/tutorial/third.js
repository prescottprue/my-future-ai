import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, Collapse, InputGroup, FormGroup, Label, Input, InputGroupButton, ButtonGroup, Button } from 'reactstrap'

// Componenets
import SimpleList from '../../components/SimpleList'
import PageHeading from '../../components/PageHeading'
import ActionsGroup from '../../components/ActionsGroup'

// Helpers
import DatabaseHelper from '../../utils/DatabaseHelper'

// Actions
import { updateGoal } from '../../actions/FirebaseActions'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid
  return ({ uid, goals: helpers.dataToJS(state.firebase, DatabaseHelper.getUserGoalsPath(uid)) })
})
@firebaseConnect((props) => ([ DatabaseHelper.getUserGoalsPath(props.uid) ]))
export default class TutorialThirdStep extends React.Component {

  constructor (props) {
    super(props)

    let count = _.countBy(props.goals, goal => { return goal.primary })

    this.state = {
      explanation: false,
      doneSelecting: { link: '/tutorial/fourth', text: "Go to Step 4", disabled: true },
      listActions: [
        { func: this.selectPrimary.bind(this), image: 'addition-sign' },
      ],
      selectedListActions: [
        { func: this.deselectPrimary.bind(this), image: 'minus-big-symbol' },
      ],
      selectedListFilters: [
        function(item) { return item.primary === false }
      ],
      listFilters: [
        function(item) { return item.primary === true }
      ],
    }

    this.state.actions = [
      this.state.doneSelecting,
      { func: this.explanation.bind(this), text: "Why should I do this?" },
      { link: '/tutorial/second', text: "Back to Step 2" },
    ]
  }

  componentWillUpdate(props, state) {
    let count = _.countBy(props.goals, goal => { return goal.primary })
    state.doneSelecting.disabled = (count.true === undefined)
    state.listActions = (count.true >= 3) ? [] : [
      { func: this.selectPrimary.bind(this), image: 'addition-sign' },
    ]
  }

  explanation() {
    this.state.actions.splice(1, 1)
    this.setState({ ...this.state, explanation: true })
  }

  deselectPrimary(goal) {
    let count = _.countBy(this.props.goals, goal => { return goal.primary })
    if (count.true === 1) { this.state.doneSelecting.disabled = true }

    this.state.listActions = [
      { func: this.selectPrimary.bind(this), image: 'addition-sign' },
    ]

    updateGoal(goal.key, { primary: false })
  }

  selectPrimary(goal) {
    // Remove ability to select another primary goal
    let count = _.countBy(this.props.goals, goal => { return goal.primary })
    if (count.true === 2) {
      this.setState({
        ...this.state,
        listActions: [],
      })
    } else {
      this.state.doneSelecting.disabled = false
    }

    updateGoal(goal.key, { primary: true })
  }

  render () {


    return (
      <div>
        <PageHeading image="list" sub="Step 3" top>Primary goals</PageHeading>

        <p>
          Pick 1 to 3 things you’re most committed to, most excited about, things that would give you the most satisfaction.
        </p>

        <p><b>Selected:</b></p>
        <SimpleList
          items={ this.props.goals }
          filters={ this.state.selectedListFilters }
          actions={ this.state.selectedListActions }
        />

        <p><b>Full list:</b></p>
        <SimpleList
          items={ this.props.goals }
          actions={ this.state.listActions }
          filters={ this.state.listFilters }
        />

        <Collapse isOpen={ this.state.showDescribe }>
          <SimpleList
            items={ this.props.goals }
            filters={ this.state.selectedListFilters }
          />
        </Collapse>

        <Collapse isOpen={ this.state.explanation }>
          <p><b>Why it is neccessary that you do this</b></p>
          <p>
            Jim Rohn always taught that if you have enough reasons, you can do anything.
          </p>
          <p>
            Our purpose for doing something is a much stronger motivator than the object that we pursue. Reasons are the difference between being interested versus being committed to accomplishing something.
          </p>
          <p>
            There are many things in life we say we want, but really we’re only interested in them for a time. We must be totally committed to whatever it takes to achieve. If, for example, you just say you want to be rich, well, that’s a goal, but it doesn’t tell your brain much. If you understand why you want to be rich, what being wealthy would mean to you, you’ll be much more motivated to get there. Why to do something is much more important than how to do it. If you get a big-enough why, you can always figure out the how. If you have enough reasons, you can do virtually anything in this world.
          </p>
        </Collapse>

        <ActionsGroup actions={ this.state.actions } />
      </div>
    )
  }
}