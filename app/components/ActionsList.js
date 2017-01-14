import React from 'react'
import { Link } from 'react-router'
import { Row, Col, Card, CardImg, CardText } from 'reactstrap'

import ActionCard from './ActionCard'

export default class ActionsList extends React.Component {
  render () {
    return (
      <Row>
        { this.props.data.map((item, index) => {

          return (
            <Col xs={6} key={ index }>
              <ActionCard item={ item } />
            </Col>
          )
        })}
      </Row>
    )
  }
}