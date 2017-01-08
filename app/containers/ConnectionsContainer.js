import React from 'react'
import { Link } from 'react-router'
import { Container, Button, Row, Col, Card, CardBlock, CardImg, CardTitle, CardSubtitle, CardText, InputGroup, Input, InputGroupButton } from 'reactstrap'

import PageHeading from '../components/PageHeading'
import UserCard from '../components/UserCard'
import Empty from '../components/Empty'

// Decorators
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
@connect(( state, props ) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid

  return {
    users: helpers.dataToJS(state.firebase, `users/${uid}/connections`),
    uid
  }
})
@firebaseConnect((props) => ([ `users/${props.uid}/connections` ]))
export default class ConnectionsContainer extends React.Component {
  render () {
    let connections = []

    _.each(this.props.users, (value, key) => {
      // Remove self from list
      if (key === this.props.auth.uid) { return }
      connections.push(_.assign(value, { uid: key }))
    })


    return (
      <div>
        <PageHeading>Connections</PageHeading>
        <Row className="mt-1">
          <Col xs={12}>
            { (connections.length === 0) && <Empty /> }
            { connections.map((person, index) => {
              return <UserCard key={ index } profile={ person } />
            }) }
          </Col>
        </Row>
        <Link to='/users'>View other users</Link>
      </div>
    )
  }
}
                // <ul>
                  // { person.goals.map(( goal, goalIndex ) => {
                    // return <li key={ goalIndex }>{ goal.text }</li>
                  // }) }
                // </ul>
        // <InputGroup className="mt-1">
        //   <Input name="add" />
        //   <InputGroupButton>Search</InputGroupButton>
        // </InputGroup>