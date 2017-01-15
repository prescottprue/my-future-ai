import React, { PropTypes as T } from 'react'

export default class ListAction extends React.Component {

  static propTypes = {
    action: T.func.isRequired,
    image: T.string.isRequired,
    position: T.number
  }

  static defaultProps = {
    position: 0
  }

  render () {
    return (
      <span className="action-box" onClick={ this.props.action } style={{ right: this.props.position * 45 }}>
        <img src={ require(`../assets/${ this.props.image }.png`) } />
      </span>
    );
  }
}