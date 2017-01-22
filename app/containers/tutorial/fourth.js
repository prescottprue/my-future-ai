import React from 'react'

import SimpleList from '../../components/SimpleList'

import { updateStep, updateHeading, updateActions } from '../../actions/TutorialActions'

export default class TutorialStep4 extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      filters: [
        function(item) { return item.primary === false }
      ],
      formItem: { type: 'textarea', value: 'reasons' }
    }
  }

  componentWillMount () {
    updateStep(4)
    updateHeading("Reasons", "notebook")
    updateActions(4)
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