import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Container, Collapse, Nav, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem } from 'reactstrap'

import NavigationMenu from '../components/NavigationMenu'

import image from '../assets/target.png'

import { connect } from 'react-redux';
import { firebaseConnect, helpers } from 'react-redux-firebase'
@firebaseConnect()
@connect(({ firebase }) => ({
    profile: helpers.pathToJS(firebase, 'profile')
}))
@connect((store) => ({ navigationItems: store.navigation.links }))
export default class NavigationContainer extends React.Component {
  logout () {
    this.props.firebase.logout()
  }

  render () {
    return (
      <Container>
        <nav className="px-0 navbar navbar-light bg-faded flex-row justify-content-between mb-2" style={{ backgroundColor: "white" }}>
          <Link to="/" className="navbar-brand">
            <img src={ image } alt="Logo" width="30" height="30" />
          </Link>
          { this.props.profile &&
            <NavigationMenu profile={ this.props.profile }/>
          }
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            { this.props.navigationItems.map((link, index) => {
              if ( ! link.action) {
                return (
                  <li key={ index } className="nav-item">
                    <Link to={ link.href } className="mr-1">{ link.title }</Link>
                  </li>
                )
              }

              let action = (link.action && typeof this[link.href] === 'function') ? this[link.href].bind(this) : null
              return (
                <li key={ index } className="nav-item">
                  <Link to="/" onClick={ action }>{ link.title }</Link>
                </li>
              )
            }, this)}
            </ul>
          </div>
        </nav>
          { this.props.children }
      </Container>
    )
  }
}