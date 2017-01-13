import React from 'react'

export default class DateTime extends React.Component {
  unixToDateTime (timestamp) {
    return new Date(timestamp).toLocaleString()
  }
  render () {
    return <p className="muted mb-0"><small>{ this.props.text }: { this.unixToDateTime(this.props.time) }</small></p>
  }
}