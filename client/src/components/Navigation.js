import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Navigation extends Component {
  render() {
    if(this.props.logged_in) {
      return (
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">HabitTracker</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Log Out</NavLink>
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
              <NavLink href="#">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Log In</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    logged_in: state.session
  }
}

export default connect(mapStateToProps)(Navigation);
