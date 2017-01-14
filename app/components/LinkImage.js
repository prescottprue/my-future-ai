import React, { PropTypes as T } from 'react'

export default class LinkImage extends React.Component {
  static propTypes = {
    image: T.string
  }

  render () {
    return <img src={ require(`../assets/${this.props.image}.png`) } className="mr-2" style={{ marginTop: '-0.25rem' }} width='16' height='16' />
  }
}