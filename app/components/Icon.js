import React from 'react';

export default class Icon extends React.Component {

  render () {
    return (
      <div className="my-1 text-xs-center">
        <img src={ "https://placehold.it/" + this.props.size } className="img-fluid" alt="Responsive image" />
        <p>{ this.props.children }</p>
      </div>
    );
  }
}