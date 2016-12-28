import React from 'react';
import { Row, Col } from 'reactstrap';

export default class PageHeading extends React.Component {

  render () {
    return (
      <Row className="mt-1 text-xs-center">
        <Col xs="12">
          <h1>{ this.props.children }</h1>
        </Col>
      </Row>
    );
  }
}