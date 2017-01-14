import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Card, CardImg, CardText } from 'reactstrap'

export default class ActionCard extends React.Component {
  static propTypes = {
    item: T.shape({
      link: T.string.isRequired,
      image: T.string,
      title: T.string.isRequired
    })
  }

  render () {
    const { link, image, title } = this.props.item

    return (
      <Card block className="text-center">
        <Link to={ link }>
          <CardImg src={ require(`../assets/${ image }.png`) } className="mx-auto" width="64" height="64" />
          <CardText className="mt-2"><b>{ title }</b></CardText>
        </Link>
      </Card>
    )
  }
}