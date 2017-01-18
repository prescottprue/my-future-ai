import React from 'react'
import { Container } from 'reactstrap'

export default class TutorialWrapper extends React.Component {

  render () {
    return (
      <Container className="my-3 tutorial-container">
        { this.props.children }
      </Container>
    )
  }
}