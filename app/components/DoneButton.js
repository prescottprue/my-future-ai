import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Button } from 'reactstrap'

export default class DoneButton extends React.Component {

  static propTypes = {
    text: T.string,
    link: T.oneOfType([
      T.string,
      T.func
    ]).isRequired,
    color: T.string
  }

  static defaultProps = {
    text: 'Done',
    color: 'primary'
  }

  render () {
    if (typeof this.props.link === "string") {
      return <Link to={ this.props.link }><Button outline color={ this.props.color }>{ this.props.text }</Button></Link>
    } else {
      return <Button onClick={ this.props.link } outline color={ this.props.color }>{ this.props.text }</Button>
    }
  }
}