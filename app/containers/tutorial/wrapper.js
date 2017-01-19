import React from 'react'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'

import PageHeading from '../../components/PageHeading'
import ActionsGroup from '../../components/ActionsGroup'

@connect(state => ({
  heading: state.tutorial.heading,
  actions: state.tutorial.actions
}))
export default class TutorialWrapper extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render () {
    const { children, heading, actions } = this.props
    return (
      <Container className="my-3 tutorial-container">
        <PageHeading image={ heading.image } sub={ heading.subtitle } top>{ heading.title }</PageHeading>
        { children }
        <ActionsGroup actions={ actions } />
      </Container>
    )
  }
}