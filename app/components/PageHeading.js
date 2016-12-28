import React from 'react';
import { Row, Col } from 'reactstrap';

export default class PageHeading extends React.Component {

  render () {
    return (
      <Row className="mt-1 text-xs-center">
        <Col xs="12">
          <h1>{ this.props.children }</h1>
          { this.props.sub && <p className="text-xs-center"><small className="text-muted">{ this.props.sub }</small></p>}
        </Col>
      </Row>
    );
  }
}