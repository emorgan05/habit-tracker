import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { logOutUser } from '../actions/sessionActions';
import NavBarPres from '../components/NavBarPres';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut = (event) => {
    event.preventDefault();
    this.props.logOutUser();
    this.props.history.push('/');
  }

  render () {
    return (
      <NavBarPres logged_in={this.props.logged_in} logOut={this.logOut} />
    )
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
