import React from 'react'
import { Link } from 'react-router'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'

import DatabaseHelper from '../utils/DatabaseHelper'

// @connect((state, props) => {
//   return ({
//     actions: helpers.dataToJS(state.firebase, DatabaseHelper.getGoalActions(props.goal.id)),
//   })
// })
// @firebaseConnect((props) => ([
//   { type: 'once', path: DatabaseHelper.getGoalActions(props.goal.id) }
// ]))
export default class GoalCard extends React.Component {
  render () {
    const { goal } = this.props

    return (
      <div className="card mb-3">
        <div className="card-block">
          <h4 className="card-title">{ goal.title }</h4>
        </div>
        <div className="card-block">
          <Link to={ `goals/${ goal.id }` }>
            <Button outline color="primary">View</Button>
          </Link>
        </div>
      </div>
    )
  }
}
        // <ul className="list-group list-group-flush">
        //   { this.props.actions.map((action, index) => {
        //     return <li className="list-group-item" key={ index }>{ action.text }</li>
        //   })}
        // </ul>