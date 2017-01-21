import React from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

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
      <ButtonDropdown isOpen={this.state.open} toggle={this.toggle.bind(this)}>
        <DropdownToggle className="border-0" caret>
          <img src={ this.props.profile.avatarUrl } alt={ this.props.profile.displayName + ' avatar' } className="rounded-circle" width="30" height="30" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-right">
          { this.props.items }
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}