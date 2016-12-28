import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, FormGroup, Label, InputGroup, Input, InputGroupButton, Button } from 'reactstrap';

import PageHeading from '../components/PageHeading';

import { connect } from 'react-redux';
@connect((store) => ({ goals: store.goals.list }))
export default class SelectPrimaryGoalsContainer extends React.Component {

  render () {
    return (
      <Container>
        <PageHeading>Primary goals</PageHeading>
        <FormGroup tag="fieldset">
          <legend className="col-form-legend">Select your primary goals:</legend>
          { this.props.goals.map((goal, index) => {
            return (
              <FormGroup key={ index } check>
                <Label check>
                  <Input type="checkbox" name="radio2" />{' '}
                  { goal.text }
                </Label>
              </FormGroup>
            );
          }) }
        </FormGroup>
        <Link className="float-xs-right" to="tutorial/goals"><Button outline color="primary">Done</Button></Link>
      </Container>
    );
  }
}