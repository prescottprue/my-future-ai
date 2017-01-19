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

    this.state = {
      actions: [
        // { func: this.toggle.bind(this), text: "Alrighty!" },
        // { func: this.explanation.bind(this), text: "Why should I do this?" },
        { link: '/tutorial/third', text: "Back to Step 3" },
      ],
      filters: [
        function(item) { return item.primary === false }
      ],
    }

  }

  onChange (v, c) {
    console.log(v, c)
  }


  render () {


    return (
      <div>
        <PageHeading image="notebook" sub="Step 4" top>Reasons</PageHeading>

        <p>Now write down why you absolutely will achieve them. Be clear and concise and positive. Tell yourself why you’re sure you can reach those outcomes, and why it’s important that you do.</p>

        <SimpleList
          items={ this.props.goals }
          filters={ this.state.filters }
          formItem={{ type: 'textarea', handleChange: this.onChange.bind(this) }}
        />
        <ActionsGroup actions={ this.state.actions } />
      </div>
    )
  }
}