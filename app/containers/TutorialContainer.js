import React from 'react';
import { Link } from 'react-router';
import { Button, Row, Col } from 'reactstrap';

export default class TutorialContainer extends React.Component {

  render () {
    let links = [
      { title: 'Set your goals', link: 'tutorial/goals' },
      { title: 'Connect with others', link: 'tutorial/connect' },
      { title: 'Enjoy the journey' },
    ]
    return (
      <div>
        <Row className="mt-1">
          <Col xs="12">
            <h1 className="text-xs-center">Tutorial</h1>
          </Col>
        </Row>
        { links.map((item, index) => {
          return (
            <Row key={ index } className="my-1 text-xs-center" style={{ background: 'none' }}>
              <img src="https://placehold.it/96x96" className="img-fluid" alt="Responsive image" />
              <p className="lead">
                { (item.link) ? <Link to={ item.link }>{ item.title }</Link> : item.title }
              </p>
            </Row>
          );
        }) }
        <Link to="me"><Button className="float-xs-right my-1" outline color="primary">Skip tutorial</Button></Link>
      </div>
    );
  }
}