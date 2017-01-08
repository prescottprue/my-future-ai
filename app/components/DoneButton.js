import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Button } from 'reactstrap'

export default class CheckboxList extends React.Component {

  static propTypes = {
    text: T.string,
    link: T.string.isRequired
  }

  static defaultProps = {
    text: 'Done'
  }

  render () {
    return <Link to={ this.props.link }><Button outline color="primary">{ this.props.text }</Button></Link>
  }
}