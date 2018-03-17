import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {

  }
  
  render () {
    if(this.props.logged_in) {
      return (
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">HabitTracker</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/logout" onClick={this.logout} >Log Out</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
    } else {
      return (
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">HabitTracker</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Log In</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
    }
  }
}

export default Navigation;
