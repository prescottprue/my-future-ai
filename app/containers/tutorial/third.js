import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Collapse } from 'reactstrap'

// Componenets
import SimpleList from '../../components/SimpleList'

// Helpers
import DatabaseHelper from '../../utils/DatabaseHelper'

// Actions
import { updateGoal } from '../../actions/FirebaseActions'
import { updateStep, updateHeading, updateActions, disableNext, enableNext } from '../../actions/TutorialActions'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid
  return ({ uid, goals: helpers.dataToJS(state.firebase, DatabaseHelper.getUserGoalsPath(uid)), nextState: state.tutorial.actions[0] })
})
@firebaseConnect((props) => ([ DatabaseHelper.getUserGoalsPath(props.uid) ]))
export default class TutorialStep3 extends React.Component {

  constructor (props) {
    super(props)

    let count = _.countBy(props.goals, goal => { return goal.primary })

    this.state = {
      explanation: false,
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
  }

  componentWillMount () {
    updateStep(3)
    updateHeading("Primary Goals", "list")
    updateActions(3, [
      { func: this.explanation.bind(this), text: "Why should I do this?" },
    ])
  }

  componentWillUpdate(props, state) {
    let count = _.countBy(props.goals, goal => { return goal.primary })
    if (count.true === undefined && count.false > 0 && ! props.nextState.disabled) { disableNext() }

    state.listActions = (count.true >= 3) ? [] : [
      { func: this.selectPrimary.bind(this), image: 'addition-sign' },
    ]
  }

  explanation() {
    updateActions(3)
    this.setState({ ...this.state, explanation: true })
  }

  deselectPrimary(goal) {
    let count = _.countBy(this.props.goals, goal => { return goal.primary })
    if (count.true === 1) { disableNext() }
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
    }
    enableNext()
    updateGoal(goal.key, { primary: true })
  }

  render () {
    return (
      <div>
        <p>Pick 1 to 3 things you’re most committed to, most excited about, things that would give you the most satisfaction.</p>

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
      </div>
    )
  }
}