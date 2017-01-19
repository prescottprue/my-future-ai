import React from 'react'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

// Componenets
import SimpleList from '../../components/SimpleList'

// Helpers
import DatabaseHelper from '../../utils/DatabaseHelper'

// Actions
import { updateGoal } from '../../actions/FirebaseActions'
import { updateStep, updateHeading, updateActions } from '../../actions/TutorialActions'

@connect((state, props) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid
  return ({ uid, goals: helpers.dataToJS(state.firebase, DatabaseHelper.getUserGoalsPath(uid)) })
})
@firebaseConnect((props) => ([ DatabaseHelper.getUserGoalsPath(props.uid) ]))
export default class TutorialThirdStep extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      filters: [
        function(item) { return item.primary === false }
      ],
      formItem: { type: 'textarea', handleChange: this.onChange.bind(this), value: 'reasons' }
    }
  }

  componentWillMount () {
    updateStep(4)
    updateHeading("Reasons", "notebook")
    updateActions(4)
  }

  onChange (gid, value) {
    let update = {}
    update[this.state.formItem.value] = (value.length > 1) ? value : null
    updateGoal(gid, update)
  }

  render () {


    return (
      <div>
        <p>Now write down why you absolutely will achieve your goals. Be clear and concise and positive. Tell yourself why you’re sure you can reach those outcomes, and why it’s important that you do.</p>

        <SimpleList
          items={ this.props.goals }
          filters={ this.state.filters }
          formItem={ this.state.formItem }
        />
      </div>
    )
  }
}