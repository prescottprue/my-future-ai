import React, { PropTypes as T } from 'react'
import { Row, Col } from 'reactstrap'

import FirebaseHelper from '../../utils/FirebaseHelper'

export default class CardGoals extends React.Component {
  static propTypes = {
    goals: T.object
  }

  constructor (props) {
    super(props)
    this.state = { goals: [] }

  }

  componentWillReceiveProps(props) {
    if (props.goals === undefined || props.goals === null) { return }

    let list = new FirebaseHelper(props.goals)

    this.setState({ goals: list.primaryGoals().data })

  }
  render () {
    if (this.state.goals.length === 0) { return <span></span> }

    return (
      <ul className="list-group list-group-flush">
        <li className="list-group-item pt-0 border-top-0"><b>Primary Goals</b></li>
        { this.state.goals.map((goal, index) => {
          return <li key={ index } className="list-group-item text-center">{ goal.text }</li>
        })}
      </ul>
    )
  }
}