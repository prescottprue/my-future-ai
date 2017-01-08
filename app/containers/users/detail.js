import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
import { Container, Row, Col, InputGroup, Input, InputGroupButton, Button } from 'reactstrap'

import PageHeading from '../../components/PageHeading'
import Loading from '../../components/Loading'
import DoneButton from '../../components/DoneButton'


@connect((state, props) => {
  return ({
    back: props.router.goBack,
    user: helpers.dataToJS(state.firebase, `users/${props.params.id}`),
    uid: helpers.pathToJS(state.firebase, 'auth').uid,
  })
})

@firebaseConnect((props) => ([
  `users/${props.params.id}`
]))

export default class UserContainer extends React.Component {

  sendRequest () {
    let data = {}
    data[this.props.params.id] = true
    this.props.firebase.update(`requests/${ this.props.uid }`, data)
  }

  render () {
    const { user } = this.props

    if (user === undefined) { return <Loading /> }

    return (
      <div>
        <PageHeading>{ user.displayName }</PageHeading>
        <img src={ user.photo } width="100%" />
        <p className="mt-1"><b>Goals</b></p>
        <ul>
          { user.goals !== undefined && Object.keys(user.goals).map((key) => {
            return <li className="mb-0" key={ key }>{ user.goals[key].text }</li>
          })}
        </ul>
        <Button outline onClick={ this.sendRequest.bind(this) } color="success">Connect</Button> <Button outline onClick={ this.props.back } color="primary">Back</Button>
      </div>
    )
  }
}