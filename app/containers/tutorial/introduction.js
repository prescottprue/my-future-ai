import React from 'react'
import { ButtonGroup, Button } from 'reactstrap'

import JumbotronPage from '../../components/JumbotronPage'
import ActionsGroup from '../../components/ActionsGroup'

// Actions
import { updateStep, updateHeading, updateActions } from '../../actions/TutorialActions'

export default class TutorialIntroduction extends React.Component {
  componentWillMount () {
    updateStep(0)
    updateHeading("", "")
    updateActions(0)
  }

  render () {
    return (
      <div>
        <JumbotronPage
          title="Welcome..."
          image="brightness"
          subtitle="... to the community of people mindful of their goals."
        />
      </div>
    )
  }
}