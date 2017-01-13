import React from 'react'
import { Link } from 'react-router'
import { Container, Button, Row, Col, Card, CardBlock, CardImg, CardTitle, CardSubtitle, CardText, InputGroup, Input, InputGroupButton } from 'reactstrap'

import PageHeading from '../components/PageHeading'
import UserCard from '../components/UserCard'
import Empty from '../components/Empty'

import FirebaseHelper from '../utils/FirebaseHelper'

// Decorators
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
@connect(( state, props ) => {
  const uid = helpers.pathToJS(state.firebase, 'auth').uid,
        requests = new FirebaseHelper(helpers.dataToJS(state.firebase, `connections/${uid}`))
                 .filter((object) => { return object.accepted === false })
                 .data


  return {
    users: helpers.dataToJS(state.firebase, `users`),
    uid,
    requests
  }
})
@firebaseConnect((props) => ([
  `/users`,
  `/connections/${props.uid}`
]))
export default class ConnectionsContainer extends React.Component {
  render () {
    return (
      <div>
        <PageHeading image="open-book">Connections</PageHeading>
        <Row className="mt-1">
          <Col xs={12}>
            { (this.props.requests.length === 0) && <Empty /> }
            { this.props.requests.map((person, index) => {
              return <UserCard key={ index } profile={ this.props.users[person.key] } />
            }) }
          </Col>
        </Row>
        <Link to='/users'>View other users</Link>
        <br />
        <Link to='/requests'>View connection requests</Link>
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