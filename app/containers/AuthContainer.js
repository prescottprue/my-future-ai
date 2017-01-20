import React , { PropTypes as T } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { firebaseConnect } from 'react-redux-firebase'

// Components
import JumbotronPage from '../components/JumbotronPage'
import AuthButton from '../components/AuthButton'
import Errors from '../components/Errors'

// Actions
import { removeErrors, addError } from '../actions/ErrorActions'

@firebaseConnect()
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
        <JumbotronPage
          title="tGoals"
          subtitle="Be smart about achieving your goals."
          image="target"
        />
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