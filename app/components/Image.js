import React, { PropTypes as T } from 'react'

export default class Image extends React.Component {
  static propTypes = {
    name: T.string.isRequired
  }

  render () {
    return (
      <div className="text-center">
        <img src={ require(`../assets/${this.props.name}.png`) } className="mb-2" width="48" height="48" />
      </div>
    )
  }
}