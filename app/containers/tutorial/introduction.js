import React from 'react'
import { Link } from 'react-router'
import { ButtonGroup, Button } from 'reactstrap'

import JumbotronPage from '../../components/JumbotronPage'
import ActionsGroup from '../../components/ActionsGroup'

export default class TutorialIntroduction extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      actions: [
        { link: "/tutorial/first", text: "Happy to be here!" },
        // { link: "/tutorial/first", text: "Show me around" },
        // { link: "/tutorial/first", text: "What can I do here?" },
      ]
    }
  }

  render () {
    return (
      <div>
        <JumbotronPage
          title="Welcome..."
          image="brightness"
          subtitle="... to the community of people mindful of their goals."
        />

        <ActionsGroup actions={ this.state.actions } />

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