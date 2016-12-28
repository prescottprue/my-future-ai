import React from 'react';
import { Link } from 'react-router';
import { Container, Row, Col, InputGroup, Input, InputGroupButton, Button } from 'reactstrap';

import PageHeading from '../components/PageHeading';

import { connect } from 'react-redux';
@connect((store) => ({ goals: store.goals.list }))
export default class ListYourGoalsContainer extends React.Component {

  render () {
    return (
      <Container>
        <PageHeading>List your goals</PageHeading>
        <InputGroup className="mt-1">
          <Input name="add" placeholder="I want to..."/>
          <InputGroupButton>Add</InputGroupButton>
        </InputGroup>
        <Row className="mt-1">
          <Col xs="12">
            <ul>
              <li>Buy a car</li>
              <li>Find a new job</li>
              <li>Help 100 people</li>
              <li>Make a difference</li>
            </ul>
          </Col>
        </Row>
        <Link className="float-xs-right" to="tutorial/goals"><Button outline color="primary">Done</Button></Link>
      </Container>
    );
  }
}