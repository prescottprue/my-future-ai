import React from 'react'
import { Link } from 'react-router'
import { ButtonGroup, Button, Row, Col } from 'reactstrap'

import JumbotronPage from '../../components/JumbotronPage'

export default class TutorialIntroduction extends React.Component {

  render () {
    return (
      <div>
        <JumbotronPage
          title="Welcome..."
          image="brightness"
          subtitle="... to the community of people mindful of their goals."
        >
          <ButtonGroup vertical className="mt-4">
            <Button outline color="primary">Happy to be here!</Button>
            <Button outline color="primary">Show me around</Button>
            <Button outline color="primary">What can I do here?</Button>
          </ButtonGroup>
        </JumbotronPage>
        <p className="text-muted text-center">
          I've been here before...
          <br />
          ( skip introduction )
        </p>
      </div>
    )
  }
}