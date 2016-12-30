import React from 'react';
import { Link } from 'react-router';
import { Container, Button, Row, Col } from 'reactstrap';

import PageHeading from '../components/PageHeading';
import LinkedIcon from '../components/LinkedIcon';

export default class TutorialGoalsContainer extends React.Component {

  render () {
    let main = [
      { title: 'List your goals', link: 'tutorial/goals/list' },
      { title: 'Select primary goals', link: 'tutorial/goals/select' },
    ];

    let other = [
      { title: 'Change your state' },
      { title: 'Categorize goals' },
      { title: 'Estimate time' },
    ];

    return (
      <Container>
        <PageHeading>Set your goals</PageHeading>
        <Row className="mt-1">
        { main.map((item, index) => {
          return (
            <Col key={ index } xs="6">
              <LinkedIcon link={ item.link } size="64x64">{ item.title }</LinkedIcon>
            </Col>
          );
        }) }
        </Row>
        <hr />
        <Row>
        { other.map((item, index) => {
          return (
            <Col key={ index } xs="6" className="mt-1">
              <LinkedIcon link={ item.link } size="64x64">{ item.title }</LinkedIcon>
            </Col>
          );
        }) }
        </Row>
        <Link className="float-xs-right" to="tutorial"><Button outline color="primary">Done</Button></Link>
      </Container>
    );
  }
}