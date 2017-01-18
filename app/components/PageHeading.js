import React, { PropTypes as T } from 'react'
import { Row, Col } from 'reactstrap'


export default class PageHeading extends React.Component {
  static propTypes = {
    image: T.string,
    sub: T.string,
    top: T.bool
  }

  static defaultProps = {
    top: false
  }

  render () {
    let { image, sub, children, top } = this.props

    if (image) {
      image = require(`../assets/${image}.png`)
    }

    return (
      <Row className="mt-1 text-center">
        <Col sm="12">
          { image && top && <img src={ image } height="48" width="48" className="img-fluid my-3" alt={ children } /> }
          <h1 style={{ fontSize: '1.5rem' }}>
            { image && ! top && <img src={ image } height="24" width="24" className="img-fluid mr-2" style={{ marginTop: '-0.5rem' }} alt={ children } /> }
            { children }
          </h1>
          { sub && <p><small className="text-muted">{ sub }</small></p>}
        </Col>
      </Row>
    )
  }
}