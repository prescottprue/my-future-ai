import React from 'react'

import SimpleList from '../../components/SimpleList'

import { updateStep, updateHeading, updateActions } from '../../actions/TutorialActions'

export default class TutorialStepSix extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      filters: [
        function(item) { return item.primary === false }
      ],
      formItem: { type: 'date', value: 'deadline' }
    }
  }

  componentWillMount () {
    updateStep(6)
    updateHeading("Deadlines", "calendar")
    updateActions(6)
  }

  render () {
    return (
      <div>
        <p>Set a date when you plan to achieve your goal.</p>

        <SimpleList
          items={ this.props.goals }
          filters={ this.state.filters }
          formItem={ this.state.formItem }
        />
      </div>
    )
  }
}