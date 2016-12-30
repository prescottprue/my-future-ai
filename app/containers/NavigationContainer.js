import React from 'react';
import { Link } from 'react-router';
import { Container, NavbarToggler, Collapse, Navbar, Nav, NavItem } from 'reactstrap';

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
                <Link key={ index } to={ link.href } className="mr-1">{ link.title }</Link>
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