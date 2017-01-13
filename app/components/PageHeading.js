import React, { PropTypes as T } from 'react'
import { Row, Col } from 'reactstrap'


export default class PageHeading extends React.Component {
  static propTypes = {
    image: T.string,
    sub: T.string
  }

  render () {
    let { image, sub, children } = this.props

    if (image) {
      image = require(`../assets/${image}.png`)
    }

    return (
      <Row className="mt-1 text-center">
        <Col sm="12">

          <h1 style={{ fontSize: '1.5rem' }}>
            { image && <img src={ image } height="24" width="24" className="img-fluid mr-2" style={{ marginTop: '-0.5rem' }} alt={ children } /> }
            { children }
          </h1>
          { sub && <p><small className="text-muted">{ sub }</small></p>}
        </Col>
      </Row>
    )
  }
}