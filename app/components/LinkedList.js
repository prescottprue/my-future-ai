import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'reactstrap'

export default class LinkedList extends React.Component {
  static propTypes = {
    data: T.arrayOf(T.shape({
      link: T.string.isRequired,
      title: T.string.isRequired
    })).isRequired
  }

  render () {
    return (
      <div>
        { this.props.data.map((item, index) => {
          return (
            <Row key={ index }>
              <Col xs={12}>
                <Link to={ item.link }>{ item.title }</Link>
              </Col>
            </Row>
          )
        }) }
      </div>
    )
  }
}