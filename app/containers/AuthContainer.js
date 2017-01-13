import React , { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Container, Jumbotron, Row, Col, Alert } from 'reactstrap'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

import AuthButton from '../components/AuthButton'
import Errors from '../components/Errors'

import image from '../assets/target.png'

import { removeErrors, addError } from '../actions/ErrorActions'

@firebaseConnect()
@connect(({ firebase }) => ({ auth: helpers.pathToJS(firebase, 'auth') }))
export default class AuthContainer extends React.Component {
  login(provider) {
    removeErrors()

    this.props.firebase.login({ provider: provider, type: 'popup' }).catch((data) => {
      addError(data.message)
    })
  }

  render () {
    return (
      <Container>
        <Jumbotron className="my-2 text-center" style={{ background: 'none' }}>
          <img src={ image } className="img-fluid mb-3" alt="Responsive image" />
          <h1 className="display-4 mb-0">
            BANZAI.ai
          </h1>
          <h3><small className="text-muted">Achieve your goals your way.</small></h3>
        </Jumbotron>
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