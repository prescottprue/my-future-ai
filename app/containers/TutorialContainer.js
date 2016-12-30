import React from 'react';
import { Link } from 'react-router';
import { Button, Row, Col } from 'reactstrap';

import LinkedIcon from '../components/LinkedIcon';

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
            <Row key={ index }>
              <LinkedIcon link={ item.link } size="96x96">{ item.title }</LinkedIcon>
            </Row>
          );
        }) }
        <Link to="me"><Button className="float-xs-right my-1" outline color="primary">Skip tutorial</Button></Link>
      </div>
    );
  }
}