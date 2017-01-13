import React , { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Container, Row, Col, Alert } from 'reactstrap'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

import AuthButton from '../components/AuthButton'

@connect((store) => ({ errors: store.errors.list }))
export default class AuthContainer extends React.Component {
  render () {
    console.log(this.props.errors);
    return (
      <div>
        { this.props.errors.map((error, index) => {
          return <Alert key={ index } color="danger">
            <strong>{ error.bold }</strong> { error.text }
          </Alert>
        }) }
      </div>
    )
  }
}