import React , { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Container, Row, Col, Alert } from 'reactstrap'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

import AuthButton from '../components/AuthButton'
import Errors from '../components/Errors'

import { removeErrors, addError } from '../actions/ErrorActions'

@firebaseConnect()
@connect(({ firebase }) => ({
    authError: helpers.pathToJS(firebase, 'authError'),
    auth: helpers.pathToJS(firebase, 'auth'),
    profile: helpers.pathToJS(firebase, 'profile')
}))
export default class AuthContainer extends React.Component {
  login(provider) {
    removeErrors()

    this.props.firebase.login({ provider: provider, type: 'popup' }).catch((data) => {
      addError(data.message)
    })
  }

  render () {
    console.log(this.state);
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
          <Col xs={{ size: 10, offset: 1 }} sm={{ size: 8, offset: 2 }} xl={{ size: 4, offset: 4 }}>
            <AuthButton action={ this.login.bind(this, 'google') } icon="google-plus">Continue with Google</AuthButton>
            <AuthButton action={ this.login.bind(this, 'facebook') } color="primary" icon="facebook">Continue with Facebook</AuthButton>
            <Errors />
          </Col>
        </Row>
      </Container>
    );
  }
}