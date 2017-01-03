import React , { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Button, Container, Row, Col } from 'reactstrap'
import AuthService from '../utils/AuthService'

import { connect } from 'react-redux'
@connect((store) => ({ auth: store.user.auth }))

export default class AuthContainer extends React.Component {
  googleLogin() {
    this.props.auth.login({ connection: 'google-oauth2' })
  }

  facebookLogin() {
    this.props.auth.login({ connection: 'facebook' })
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
          <p>Sign in with</p>
          <Col xs="6">
            <Button color="primary" onClick={ this.facebookLogin.bind(this) }>Facebook</Button>
          </Col>
          <Col xs="6">
            <Button color="danger" onClick={ this.googleLogin.bind(this) }>Google</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}