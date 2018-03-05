import React from 'react';
import { Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // loggedIn: this.props.loggedIn
    };
  }

  render () {
    // if(loggedIn) {
    //   return (
    //     <Navbar color="faded" light expand="md">
    //         <NavbarBrand href="/">HabitTracker</NavbarBrand>
    //           <Nav className="ml-auto" navbar>
    //             <NavItem>
    //               <NavLink href="#">Log Out</NavLink>
    //             </NavItem>
    //           </Nav>
    //       </Navbar>
    //   )
    // } else {
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
      )
    // }
  }
}

export default Navigation;
