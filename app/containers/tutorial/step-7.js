import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, Collapse, InputGroup, FormGroup, Label, Input, InputGroupButton, ButtonGroup, Button } from 'reactstrap'

// Componenets
import SimpleList from '../../components/SimpleList'

// Helpers
import DatabaseHelper from '../../utils/DatabaseHelper'

// Actions
import { updateStep, updateHeading, updateActions } from '../../actions/TutorialActions'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid
  return ({ uid, goals: helpers.dataToJS(state.firebase, DatabaseHelper.getUserGoalsPath(uid)) })
})
@firebaseConnect((props) => ([ DatabaseHelper.getUserGoalsPath(props.uid) ]))
export default class TutorialStep7 extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      filters: [
        function(item) { return item.primary === false }
      ],
      formItem: { type: 'textarea', value: 'evidenceProcedure' }
    }
  }

  componentWillMount () {
    updateStep(7)
    updateHeading("Evidence procedures", "loupe")
    updateActions(7)
  }

  render () {
    return (
      <div>
        <p>Describe an evidence procedure for each of your goals - how will you look and feel, what will you see and hear in your external world after you have achieved your outcome.</p>
        <p>If you don’t know how you’ll know when you’ve achieved your goal, you may already have it. You can be winning and feel like you’re losing if you don’t keep score.</p>

        <SimpleList
          items={ this.props.goals }
          filters={ this.state.filters }
          formItem={ this.state.formItem }
        />
      </div>
    )
  }
}

// 1. State your outcome in positive terms. Say what you want to happen. Too often, people state what they don’t want to happen as their goals.
// Add this to step 1


// 3. Have an evidence procedure. Know how you will look, how you will feel, and what you will see and hear in your external world after you have achieved your outcome. If you don’t know how you’ll know when you’ve achieved your goal, you may already have it. You can be winning and feel like you’re losing if you don’t keep score.
// Step 7 - describe evidence procedures.

// 4. Be in control. Your outcome must be initiated and maintained by you. It must not be dependent upon other people having to change themselves for you to be happy. Make sure your outcome reflects things that you can affect directly.
// Add this to step 1

// 5. Verify that your outcome is ecologically sound and desirable. Project into the future the consequences of your actual goal. Your outcome must be one that benefits you and other people.
// Add this to step 1

// ??? Step 8 - review
// - Stated in positive?
// - You are in control?
// - Ecologically sound and desirable?

// SETTING OUTCOMES KEY COMPONENTS Specific What exactly do you/ we want? Sensory Based What will you / we see? What will you / we hear? What will you / we feel? What will you / we smell? What will you / we taste? Desired State 1 Present State: What do you / we want? What is happening now? What is the difference? Evidence Procedure: How will you / we know the outcome has been realized? 