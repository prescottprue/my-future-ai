import React from 'react'

import SimpleList from '../../components/SimpleList'

import { updateStep, updateHeading, updateActions } from '../../actions/TutorialActions'

export default class TutorialStep5 extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      filters: [
        function(item) { return item.primary === false }
      ],
      formItem: { type: 'textarea', value: 'outcome' }
    }
  }

  componentWillMount () {
    updateStep(5)
    updateHeading("Outcomes", "bookmark")
    updateActions(5)
  }

  render () {
    return (
      <div>
        <p>Describe the outcomes of your goals in sensory terms. How do your outcomes look, sound, feel and smell? Engage all of your senses in describing the results you want. Be as specific as possible.</p>

        <SimpleList
          items={ this.props.goals }
          filters={ this.state.filters }
          formItem={ this.state.formItem }
        />
      </div>
    )
  }
}