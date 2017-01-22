import React from 'react'

import SimpleList from '../../components/SimpleList'

import { updateStep, updateHeading, updateActions } from '../../actions/TutorialActions'

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