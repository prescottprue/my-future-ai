import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import ListAction from '../ListAction'

export default class UserListItem extends React.Component {

  static propTypes = {

  }

  render () {
    const { profile } = this.props

    return (
      <span className="flex-column d-flex w-100">
        <strong>Partner:</strong>
        <span className="mt-2">
          <img src={ profile.avatarUrl } width="36px"/>
          <span className="ml-2">{ profile.displayName }</span>
          <Link className="ml-2" to={ `/users`}>View profile</Link>
        </span>
      </span>
    )
  }
}