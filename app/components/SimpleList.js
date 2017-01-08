import React, { PropTypes as T } from 'react'

export default class SimpleList extends React.Component {

  static propTypes = {
    goals: T.object,
  }

  render () {
    const { goals } = this.props
    let goalsList = undefined

    switch(goals) {
      case undefined:
        goalsList = 'Loading'
        break

      case null:
        goalsList = 'Goals list is empty'
        break

      default:
        goalsList = Object.keys(goals).map((goalId) => {
          return (
            <li key={ goalId }>{ goals[goalId].text }</li>
          )
        })
    }

    return (
      <ul>
        { goalsList }
      </ul>
    );
  }
}