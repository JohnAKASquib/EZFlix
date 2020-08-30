import React, { Component } from "react";
import { NavBarView } from "../views";
import { connect } from "react-redux";
import { logoutThunk, me, fetchAllMoviesThunk } from "../../thunks";

class NavBarContainer extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  // If home button is clicked this will hopefully reload trending movies
  homeClicked = () => {
    this.props.reloadHome();
  };

  render() {
    return (
      <>
        <NavBarView
          isLoggedIn={this.props.isLoggedIn}
          loggedInUser={this.props.loggedInUser}
          handleLogout={this.handleLogout}
          homeClicked={this.homeClicked}
        />
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
    me: () => dispatch(me()),
    reloadHome: () => dispatch(fetchAllMoviesThunk()),
  };
};

export default connect(mapState, mapDispatch)(NavBarContainer);
