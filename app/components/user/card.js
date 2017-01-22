import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
const { dataToJS } = helpers
import { Container, Button, Row, Col, Card, CardBlock, CardImg, CardTitle, CardSubtitle, CardText, InputGroup, Input, InputGroupButton } from 'reactstrap'

import DH from '../../utils/DatabaseHelper'

import Loading from '../../components/Loading'
import CardGoals from './card-goals'
import CardOnline from './card-online'

@firebaseConnect((props) => ([]))
export default class UserCard extends React.Component {
  static propTypes = {
    uid: T.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { profile: undefined, goals: undefined }
  }

  componentWillReceiveProps (props) {
    props.firebase.ref(`users/${props.uid}`).once('value').then(ss => {
      console.log(ss.val());
      this.setState({ ...this.state, profile: ss.val() })
    })

    props.firebase.ref('goals').orderByChild('uid').equalTo(props.uid).once('value').then(ss => {
      console.log(ss.val());
      this.setState({ ...this.state, goals: ss.val() })
    })
  }

  render () {
    const { firebase, uid } = this.props

console.log(this.state);
    if (this.state.profile === undefined) {
      return <Loading />
    }

    return (
      <Card className="my-3">
        <CardImg top src={ this.state.profile.avatarUrl } alt={ this.state.profile.displayName + ' profile image'} />
        <CardBlock>
          <CardTitle>{ this.state.profile.displayName }</CardTitle>
          <CardOnline online={ this.state.profile.online } lastSeen={ this.state.profile.lastSeen } />
        </CardBlock>
        <CardGoals goals={ this.state.goals } />
      </Card>
    )
  }
}