import React, { Component } from "react";
import NavBarView from "../views/NavBarView";
import SearchBarView from "../views/SearchBarView";
import { connect } from "react-redux";
import { logoutThunk } from "../../thunks";

class NavBarContainer extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <>
        <NavBarView
          isLoggedIn={this.props.isLoggedIn}
          loggedInUser={this.props.loggedInUser}
          handleLogout={this.handleLogout}
        />
        <SearchBarView />
      </>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    loggedInUser: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logoutThunk()),
  };
};

export default connect(mapState, mapDispatch)(NavBarContainer);
