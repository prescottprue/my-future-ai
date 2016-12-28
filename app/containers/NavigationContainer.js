import React from 'react';
import { Container, NavbarToggler, Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import { connect } from 'react-redux';
@connect((store) => ({ navigationItems: store.navigation.links }))

export default class NavigationContainer extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <Nav>
            { this.props.navigationItems.map((link, index) => {
              return (
                <NavLink key={ index } href={ '/#' + link.href } className="mr-1">{ link.title }</NavLink>
              );
            })}
          </Nav>
        </Navbar>
        <Container>
          { this.props.children }
        </Container>
      </div>
    )
  }
}