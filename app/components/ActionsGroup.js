import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Row, Col, ButtonGroup, Button } from 'reactstrap'

export default class TutorialWrapper extends React.Component {
  static propTypes = {
    actions: T.arrayOf(T.shape({
      link: T.string,
      func: T.func,
      text: T.string.isRequired
    }))
  }

  render () {
    return (
      <ButtonGroup vertical>
        { this.props.actions.map((action, index) => {
          if (action.link) {
            let disabled = (action.disabled) ? 'disabled' : ''
            return <Link key={ index } to={ action.link } role="button" className={ "btn btn-outline-primary" + " " + disabled }>{ action.text }</Link>
          }
          return <Button key={ index } outline disabled={ action.disabled } color="primary" onClick={ action.func }>{ action.text }</Button>
        })}
      </ButtonGroup>
    )
  }
}