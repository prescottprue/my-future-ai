import React from 'react';
import { Link } from 'react-router';
import { Container, Button, Row, Col, Card, CardBlock, CardTitle, CardSubtitle, CardText, InputGroup, Input, InputGroupButton } from 'reactstrap';

import PageHeading from '../components/PageHeading';

import { connect } from 'react-redux';
@connect((store) => ({ connections: store.connections.list }))
export default class ConnectionsContainer extends React.Component {
  render () {
    return (
      <Container>
        <PageHeading>Connections</PageHeading>
        <InputGroup className="mt-1">
          <Input name="add" />
          <InputGroupButton>Search</InputGroupButton>
        </InputGroup>
        <Row className="mt-1">
          { this.props.connections.map((person, index) => {
            return (
              <Card key={ index } block style={{
                borderRight: 0,
                borderLeft: 0,
                borderRadius: 0,
                marginBottom: 0
              }}>
                <CardTitle>{ person.name }</CardTitle>
                <CardText>Goals:</CardText>
                <ul>
                  { person.goals.map(( goal, goalIndex ) => {
                    return <li key={ goalIndex }>{ goal }</li>;
                  }) }
                </ul>
                <Button>Connect</Button>
              </Card>
            );
          }) }
        </Row>
      </Container>
    );
  }
}