import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Container, Button, Row, Col, Card, CardBlock, CardImg, CardTitle, CardSubtitle, CardText, InputGroup, Input, InputGroupButton } from 'reactstrap'

export default class UserCard extends React.Component {
  static propTypes = {
    profile: T.shape({
      displayName: T.string,
      photo: T.string,
      goals: T.object
    }),
  }

  render () {
    const { profile } = this.props

    return (
      <Card block className="border-0" style={{ borderRadius: 0, marginBottom: 0 }}>
        <Row>
          <Col xs={4}>
            <CardImg top width="100%" src={ profile.photo } alt={ profile.displayName + ' avatar'} />
          </Col>
          <Col xs={8}>
            <CardTitle>{ profile.displayName }</CardTitle>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col xs={4}>
            <dl>
              <dt>Goals</dt>
            </dl>
          </Col>
          <Col xs={8}>
            <dl>
              { profile.goals !== undefined && Object.keys(profile.goals).map((key) => {
                return <dd className="mb-0" key={ key }>{ profile.goals[key].text }</dd>
              })}
            </dl>
          </Col>
        </Row>
        { this.props.children }
      </Card>
    )
  }
}