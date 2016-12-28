import React from 'react';
import { Link } from 'react-router';
import { Button, Container, Row, Col } from 'reactstrap';

export default class AuthContainer extends React.Component {

  render () {
    return (
      <Container>
        <Row className="jumbotron my-2 text-xs-center" style={{ background: 'none' }}>
          <img src="https://placehold.it/128x128" className="img-fluid" alt="Responsive image" />
          <h1 className="display-4">
            App Title
          </h1>
          <h3><small className="text-muted">Some fancy slogan</small></h3>
        </Row>
        <Row className="text-xs-center">
          <p>Main success metric - % of Goals Achieved
          <br/>
          <small className="text-muted">Achieved goals / (goals with completion date passed + goals inactive for 1 month)</small></p>
          <p>Sign in with</p>
          <Col xs="6">
            <Link to="tutorial"><Button color="primary">Facebook</Button></Link>
          </Col>
          <Col xs="6">
            <Link to="tutorial"><Button color="danger">Google</Button></Link>
          </Col>
        </Row>
      </Container>
    );
  }
}