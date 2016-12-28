import React from 'react';
import { Button, Row, Col, Card, CardBlock, CardTitle, CardSubtitle, CardText, InputGroup, Input, InputGroupButton } from 'reactstrap';

import PageHeading from '../components/PageHeading';

export default class TutorialConnectExpertsContainer extends React.Component {
  render () {
    let people = [
      { name: 'Audrius Petraitis', areas: [ 'Finance', 'Relationships', 'Career' ] },
      { name: 'Petras Petraitis', areas: [ 'Finance' ] },
      { name: 'Simas Petraitis', areas: [ 'Finance', 'Career' ] },
      { name: 'Danielius Petraitis', areas: [ 'Relationships', 'Career' ] },
      { name: 'Robertas Petraitis', areas: [ 'Finance', 'Career' ] },
    ];

    return (
      <div>
        <PageHeading sub="These people are paid only if you achieve your goal.">Experts</PageHeading>
        <InputGroup className="mt-1">
          <Input name="add" />
          <InputGroupButton>Search</InputGroupButton>
        </InputGroup>
        <Row className="mt-1">
          { people.map((person, index) => {
            return (
              <Card key={ index } block style={{
                borderTight: 'none',
                borderLeft: 'none',
                borderRadius: 0,
                marginBottom: 0
              }}>
                <CardTitle>{ person.name }</CardTitle>
                <CardText>Areas:</CardText>
                <ul>
                  { person.areas.map(( goal, goalIndex ) => {
                    return <li key={ goalIndex }>{ goal }</li>;
                  }) }
                </ul>
                <CardText>Rate: from €99 / goal</CardText>
                <Button>Connect</Button>
              </Card>
            );
          }) }
        </Row>
      </div>
    );
  }
}