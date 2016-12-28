import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router';

export default class DashboardContainer extends React.Component {

  render () {
    return (
      <div>
        <Row>
          <Col xs="12">
            <h4>Your feed:</h4>
            <ul>
              <li>Petras done his homework</li>
              <li>Petras passed an exam</li>
              <li>Petras completed his goal "Get a degree"</li>
              <li>Your mentor sent you a message</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h6>Next actions:</h6>
            <ul>
              <li>Petras done his homework</li>
              <li>Petras passed an exam</li>
              <li>Petras completed his goal "Get a degree"</li>
              <li>Your mentor sent you a message</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h6>Your goals:</h6>
            <ul>
              <li>Buy a car</li>
              <li>Find a new job</li>
              <li>Help 100 people</li>
              <li>Make a difference</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Link to="tutorial"><Button className="float-xs-right my-1" outline color="primary">View tutorial</Button></Link>
          </Col>
        </Row>
      </div>
    );
  }
}