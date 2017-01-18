import React from 'react'
import { Link } from 'react-router'
import { ButtonGroup, Button } from 'reactstrap'

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
            <Button outline color="primary"><Link to="/tutorial/first">Happy to be here!</Link></Button>
            <Button outline color="primary"><Link to="/tutorial/first">Show me around</Link></Button>
            <Button outline color="primary"><Link to="/tutorial/first">What can I do here?</Link></Button>
          </ButtonGroup>
        </JumbotronPage>
        <p className="text-muted text-center">
          <Link to="/" className="color-inherit">
          I've been here before...
          <br />
          ( skip introduction )
          </Link>
        </p>
      </div>
    )
  }
}