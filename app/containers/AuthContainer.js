import React , { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Button, Container, Row, Col } from 'reactstrap'
import AuthService from '../utils/AuthService'

import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

@firebaseConnect()
@connect(({ firebase }) => ({
    authError: helpers.pathToJS(firebase, 'authError'),
    auth: helpers.pathToJS(firebase, 'auth'),
    profile: helpers.pathToJS(firebase, 'profile')
}))
export default class AuthContainer extends React.Component {

  login(provider) {
    this.props.firebase.login({ provider: provider })
  }

  render () {
    return (
      <Container>
        <Row className="jumbotron my-2 text-xs-center" style={{ background: 'none' }}>
          <img src="https://placehold.it/128x128" className="img-fluid" alt="Responsive image" />
          <h1 className="display-4">
            App Title
          </h1>
          <h3><small className="text-muted">Some fancy slogan</small></h3>
        </Row>
        <Row className="text-xs-center">
          <Col xs={{ size: 6, offset: 3 }}>
            <p>Sign in with</p>
            <Button color="danger" onClick={ this.login.bind(this, 'google') }>Google</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}