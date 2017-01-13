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
                   .filter((object) => { return object.accepted === true })
                   .data

  return {
    requests,
    users: helpers.dataToJS(state.firebase, `users`),
    uid
  }
})
@firebaseConnect((props) => {
  return [
  `/connections/${props.uid}`,
  `users`
  ]
})
export default class RequestsContainer extends React.Component {
  constructor () {
    super()
  }

  acceptRequest (partnerId) {
    this.props.firebase.update(`connections/${ this.props.uid }/${partnerId}`, { accepted: true })
  }

  render () {
    return (
      <div>
        <PageHeading>Requests</PageHeading>
        <Row className="mt-1">
          <Col xs={12}>
            { (this.props.requests.length === 0) && <Empty /> }
            { this.props.users && this.props.requests.map((person, index) => {
              return (
                <UserCard key={ index } profile={ this.props.users[person.key] }>
                  <Button onClick={ this.acceptRequest.bind(this, person.key) }>Accept</Button>
                </UserCard>
              )
            }) }
          </Col>
        </Row>

        <Button outline onClick={ this.props.router.goBack } color="primary">Back</Button>
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