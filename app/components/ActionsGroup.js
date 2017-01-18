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
          if (action.link) return <Button key={ index } outline color="primary"><Link to={ action.link }>{ action.text }</Link></Button>
          return <Button key={ index } outline color="primary" onClick={ action.func }>{ action.text }</Button>
        })}
      </ButtonGroup>
    )
  }
}