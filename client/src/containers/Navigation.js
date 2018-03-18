import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

import { logOutUser } from '../actions/sessionActions';

class Navigation extends Component {

  logOut = (event) => {
    event.preventDefault();
    this.props.logOutUser();
    if(!this.props.logged_in) {
      return (<Redirect to="/" />);
    }
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

function mapStateToProps(state) {
  return {
    logged_in: state.session
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOutUser: bindActionCreators(logOutUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
