import React from 'react'
import { Row, Col } from 'reactstrap'

import ActionCard from './ActionCard'

export default class ActionsCardsList extends React.Component {
  render () {
    return (
      <Row>
        { this.props.data.map((item, index) => (
          <Col xs={6} sm={4} lg={3} key={ index }>
            <ActionCard item={ item } />
          </Col>
        )) }
      </Row>
    )
  }
}