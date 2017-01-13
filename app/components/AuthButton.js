import React, { PropTypes as T } from 'react'
import { Button } from 'reactstrap'
require('font-awesome/css/font-awesome.css')

export default class AuthButton extends React.Component {
  static propTypes = {
    action: T.func.isRequired,
    icon: T.string.isRequired,
    color: T.string
  }

  static defaultProps = {
    color: 'danger'
  }

  render () {
    return (
      <Button color={ this.props.color } onClick={ this.props.action } style={{ minWidth: '100%', marginBottom: '.5rem' }}>
        <i className={ "float-left fa fa-" + this.props.icon }  aria-hidden="true" style={{ padding: '.3rem .8rem .3rem 0rem', borderRight: '1px solid', marginRight: '0.8rem', minWidth: '2rem'}}></i>
        <span style={{ display: 'inline-block', padding: '.2rem 0' }}>{ this.props.children }</span>
      </Button>
    )
  }
}