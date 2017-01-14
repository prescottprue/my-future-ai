import React , { PropTypes as T } from 'react'
import { Container, Jumbotron, Row, Col, Alert } from 'reactstrap'

export default class JumbotronPage extends React.Component {
  static propTypes = {
    title: T.string.isRequired,
    subtitle: T.string,
    image: T.string.isRequired
  }

  render () {
    const { title, image } = this.props

    return (
      <Jumbotron className="my-4 text-center" style={{ background: 'none' }}>
        <img src={ require(`../assets/${ image }.png`) } className="img-fluid mb-3" alt="Responsive image" />
        <h1 className="display-4 mb-0">{ title }</h1>
        { this.props.subtitle && <h3><small className="text-muted">{ this.props.subtitle }</small></h3> }
        { this.props.children }
      </Jumbotron>
    );
  }
}