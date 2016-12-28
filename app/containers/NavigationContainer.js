import React from 'react';
import { Container, NavbarToggler, Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import { connect } from 'react-redux';
@connect((store) => ({ navigationItems: store.navigation.links }))

export default class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler className="hidden-lg-up collapsed" onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <Nav>
              { this.props.navigationItems.map((link, index) => {
                return (
                  <NavItem key={ index }>
                    <NavLink href={ '/#' + link.href }>{ link.title }</NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          { this.props.children }
        </Container>
      </div>
    )
  }
}