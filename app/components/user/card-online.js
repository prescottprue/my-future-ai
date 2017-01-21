import React, { PropTypes as T } from 'react'
import { CardText } from 'reactstrap'

import FirebaseHelper from '../../utils/FirebaseHelper'

export default class CardOnline extends React.Component {
  static propTypes = {
    online: T.bool.isRequired,
    lastSeen: T.number
  }

  render () {
    let text = (this.props.online) ? "Online" : "Last online: " + new Date(this.props.lastSeen).toLocaleString()

    return <CardText><small className="text-muted">{ text }</small></CardText>
  }
}