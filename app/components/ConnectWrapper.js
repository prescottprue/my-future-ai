import React from 'react';
import { Link } from 'react-router';
import { Button } from 'reactstrap';

export default class ConnectWrapper extends React.Component {
  render () {
    return (
      <div>
        { this.props.children }
        <Link className="float-xs-right my-1" to="tutorial/connect"><Button outline color="primary">Done</Button></Link>
      </div>
    );
  }
}