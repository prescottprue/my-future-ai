import React, { PropTypes as T } from 'react'
import { Link } from 'react-router'
import { Container, NavbarToggler, Collapse, Navbar, Nav, NavItem } from 'reactstrap'

import { connect } from 'react-redux';
import { firebaseConnect, helpers } from 'react-redux-firebase'
@firebaseConnect()
@connect(({ firebase }) => ({
    authError: helpers.pathToJS(firebase, 'authError'),
    auth: helpers.pathToJS(firebase, 'auth'),
    profile: helpers.pathToJS(firebase, 'profile')
}))
@connect((store) => ({ navigationItems: store.navigation.links }))

export default class NavigationContainer extends React.Component {
  static propTypes = {

  }

  logout () {
    this.props.firebase.logout()
  }

  render () {
    return (
      <div>
        <Navbar color="faded" light>
          <Nav>
            { this.props.navigationItems.map((link, index) => {
              if ( ! link.action) {
                return <Link key={ index } to={ link.href } className="mr-1">{ link.title }</Link>
              }

              let action = (link.action && typeof this[link.href] === 'function') ? this[link.href].bind(this) : null
              return <a key={ index } href="/" onClick={ action }>{ link.title }</a>
            }, this)}
          </Nav>
        </Navbar>
        <Container>
          { this.props.children }
        </Container>
      </div>
    )
  }
}