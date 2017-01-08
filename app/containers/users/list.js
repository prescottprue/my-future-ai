import React from 'react'
import { Link } from 'react-router'
import { Container, Button, Row, Col, Card, CardBlock, CardImg, CardTitle, CardSubtitle, CardText, InputGroup, Input, InputGroupButton } from 'reactstrap'

import PageHeading from '../../components/PageHeading'
import UserCard from '../../components/UserCard'

// Decorators
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
@connect(({ firebase }) => ({
  users: helpers.dataToJS(firebase, `users`),
  auth: helpers.pathToJS(firebase, 'auth')
}))
@firebaseConnect((props) => ([ `/users` ]))
export default class UsersContainer extends React.Component {
  render () {
    let connections = []

    _.each(this.props.users, (value, key) => {
      // Remove self from list
      if (key === this.props.auth.uid) { return }
      connections.push(_.assign(value, { uid: key }))
    })

    return (
      <Container>
        <PageHeading>Users</PageHeading>
        <Row className="mt-1">
          { connections.map((person, index) => {
            return <UserCard key={ index } profile={ person } />
          }) }
        </Row>
      </Container>
    )
  }
}