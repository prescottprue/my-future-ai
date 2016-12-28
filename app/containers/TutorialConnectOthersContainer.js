import React from 'react';
import { Button, Row, Col, Card, CardBlock, CardTitle, CardSubtitle, CardText, InputGroup, Input, InputGroupButton } from 'reactstrap';

import PageHeading from '../components/PageHeading';

import { connect } from 'react-redux';
@connect((store) => ({ connections: store.connections.list }))
export default class TutorialConnectOthersContainer extends React.Component {
  render () {
    return (
      <div>
        <PageHeading sub="These people are working towards similar goals.">Fellow achievers</PageHeading>
        <InputGroup className="mt-1">
          <Input name="add" />
          <InputGroupButton>Search</InputGroupButton>
        </InputGroup>
        <Row className="mt-1">
          { this.props.connections.map((person, index) => {
            return (
              <Card key={ index } block style={{
                borderRight: 'none',
                borderLeft: 'none',
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
      </div>
    );
  }
}