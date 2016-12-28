import React from 'react';
import { Link } from 'react-router';
import { Container, Button, Row, Col } from 'reactstrap';

import PageHeading from '../components/PageHeading';

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
            <Col key={ index } xs="6" className="text-xs-center" style={{ background: 'none' }}>
              <img src="https://placehold.it/64x64" className="img-fluid" alt="Responsive image" />
              <p>
                { (item.link) ? <Link to={ item.link }>{ item.title }</Link> : item.title }
              </p>
            </Col>
          );
        }) }
        </Row>
        <hr />
        <Row>
        { other.map((item, index) => {
          return (
            <Col key={ index } xs="6" className="text-xs-center mt-1" style={{ background: 'none' }}>
              <img src="https://placehold.it/64x64" className="img-fluid" alt="Responsive image" />
              <p>
                { (item.link) ? <Link to={ item.link }>{ item.title }</Link> : item.title }
              </p>
            </Col>
          );
        }) }
        </Row>
        <Link className="float-xs-right" to="tutorial"><Button outline color="primary">Done</Button></Link>
      </Container>
    );
  }
}