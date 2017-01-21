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

@connect((state, props) => {
  return ({
    profile: dataToJS(state.firebase, DH.getUserProfile(props.uid)),
    goals: dataToJS(state.firebase, DH.getUserGoalsPath(props.uid)),
  })
})
@firebaseConnect((props) => ([
  { type: 'once', path: DH.getUserProfile(props.uid) },
  { type: 'once', path: DH.getUserGoalsPath(props.uid) },
]))
export default class UserCard extends React.Component {
  static propTypes = {
    uid: T.string.isRequired
  }

  render () {
    const { profile, goals } = this.props

    if (profile === undefined) {
      return <Loading />
    }

    return (
      <Card>
        <CardImg top src={ profile.avatarUrl } alt={ profile.displayName + ' profile image'} />
        <CardBlock>
          <CardTitle>{ profile.displayName }</CardTitle>
          <CardOnline online={ profile.online } lastSeen={ profile.lastSeen } />
        </CardBlock>
        <CardGoals goals={ goals } />
      </Card>
    )
  }
}