import React from 'react'

export default class NavigationMenu extends React.Component {
  constructor () {
    super()
    this.state = { open: false }
  }

  toggle () {
    this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <div onClick={ this.toggle.bind(this) }>
        <div className={ (this.state.open) ? "dropdown show" : "dropdown" }>
          <div className="navbar-brand mr-0 dropdown-toggle">
            <img src={ this.props.profile.photo } alt={ this.props.profile.displayName + ' avatar' } className="rounded-circle" width="30" height="30" />
          </div>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            { this.props.items }
          </div>
        </div>
      </div>
    )
  }
}