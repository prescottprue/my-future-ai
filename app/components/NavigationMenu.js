import React from 'react'

export default class NavigationMenu extends React.Component {
  render () {
    return (
      <div>
        <div className="dropdown show">
          <div className="navbar-brand mr-0 dropdown-toggle">
            <img src={ this.props.profile.photo } alt={ this.props.profile.displayName + ' avatar' } className="rounded-circle" width="30" height="30" />
          </div>
          
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    )
  }
}