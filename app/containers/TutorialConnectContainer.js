import React from 'react';
import { Link } from 'react-router';
import { Container, Button, Row, Col, Card, CardBlock, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import PageHeading from '../components/PageHeading';

export default class TutorialConnectContainer extends React.Component {
  render () {
    let main = [
      { title: 'Fellow achievers', link: 'tutorial/connect/others' },
      { title: 'Mentors', link: 'tutorial/connect/mentors' },
      { title: 'Paid experts', link: 'tutorial/connect/experts' },
    ];

    return (
      <Container>
        <PageHeading>Connect</PageHeading>
        <Row className="mt-1">
        { main.map((item, index) => {
          return (
            <Col key={ index } xs="6" className="text-xs-center" style={{ background: 'none' }}>
              <img src="https://placehold.it/128x128" className="img-fluid" alt="Responsive image" />
              <p>
                <Link to={ item.link }>{ item.title }</Link>
              </p>
            </Col>
          );
        }) }
        </Row>
        <Link className="float-xs-right mt-1" to="tutorial"><Button outline color="primary">Done</Button></Link>
      </Container>
    );
  }
}