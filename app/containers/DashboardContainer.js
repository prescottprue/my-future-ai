import React from 'react';
import { Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router';

import PageHeading from '../components/PageHeading';

import { connect } from 'react-redux';
@connect((store) => ({ goals: store.goals.list }))
export default class DashboardContainer extends React.Component {

  render () {
    return (
      <div>
        <PageHeading>Your goals</PageHeading>
        <FormGroup tag="fieldset">
          { this.props.goals.map((goal, index) => {
            return (
              <FormGroup key={ index } check>
                <Button className="float-xs-right" outline color="primary">More</Button>
                <Label check>
                  <Input type="checkbox" name="radio2" />{' '}
                  { goal.text }
                  <br />
                  <small className="text-muted">Additional information</small>
                </Label>
              </FormGroup>
            );
          }) }
        </FormGroup>
        <Row>
          <Col xs="12">
            <Button className="float-xs-right my-1" outline color="primary">Achieved</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
        // <Row>
        //   <Col xs="12">
        //     <h4>Your feed:</h4>
        //     <ul>
        //       <li>Petras done his homework</li>
        //       <li>Petras passed an exam</li>
        //       <li>Petras completed his goal "Get a degree"</li>
        //       <li>Your mentor sent you a message</li>
        //     </ul>
        //   </Col>
        // </Row>
        // <Row>
        //   <Col xs="12">
        //     <h6>Next actions:</h6>
        //     <ul>
        //       <li>Petras done his homework</li>
        //       <li>Petras passed an exam</li>
        //       <li>Petras completed his goal "Get a degree"</li>
        //       <li>Your mentor sent you a message</li>
        //     </ul>
        //   </Col>
        // </Row>