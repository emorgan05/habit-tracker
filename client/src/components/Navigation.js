import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logOutUser } from '../actions/sessionActions';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  logOut = (event) => {
    event.preventDefault();
    this.props.logOutUser();
  }

  render () {
    if(this.props.logged_in) {
      return (
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">HabitTracker</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/logout" onClick={this.logOut} >Log Out</NavLink>
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

function mapDispatchToProps(dispatch) {
  return {
    logOutUser: bindActionCreators(logOutUser, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Navigation);
