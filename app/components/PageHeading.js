import React from 'react';
import { Row, Col } from 'reactstrap';

export default class PageHeading extends React.Component {

  render () {
    return (
      <Row className="mt-1 text-center">
        <Col sm="12">
          <h1 style={{ fontSize: '1.5rem' }}>{ this.props.children }</h1>
          { this.props.sub && <p><small className="text-muted">{ this.props.sub }</small></p>}
        </Col>
      </Row>
    );
  }
}