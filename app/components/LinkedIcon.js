import React from 'react';
import { Link } from 'react-router';

import Icon from './Icon';

export default class LinkedIcon extends React.Component {

  render () {
    if ( this.props.link ) {
      return <Link to={ this.props.link }><Icon size={ this.props.size }>{ this.props.children }</Icon></Link>;
    } else {
      return <Icon size={ this.props.size }>{ this.props.children }</Icon>;
    }
  }
}