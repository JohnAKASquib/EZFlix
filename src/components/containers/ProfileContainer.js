import React, { Component } from "react";
import { ProfileView } from "../views";
import { connect } from "react-redux";
import {
  me,
  logoutThunk,
  fetchFavoriteMoviesThunk,
  removeFavoriteMovieThunk,
} from "../../thunks";

class ProfileContainer extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.fetchFavoriteMovies(this.props.loggedInUser.id);
    }
  }

  handleLogout = () => {
    this.props.logout();
  };

  handleSubmit = (movieID) => {
    this.props.removeFavoriteMovie(this.props.loggedInUser.id, movieID);
  };

  render() {
    return (
      <ProfileView
        isLoggedIn={this.props.isLoggedIn}
        loggedInUser={this.props.loggedInUser}
        favoriteMovies={this.props.favoriteMovies}
        handleSubmit={this.handleSubmit}
        handleLogout={this.handleLogout}
      />
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    loggedInUser: state.user,
    favoriteMovies: state.favoriteMovies,
  };
};

const mapDispatch = (dispatch) => {
  return {
    me: () => dispatch(me()),
    logout: () => dispatch(logoutThunk()),
    fetchFavoriteMovies: (id) => dispatch(fetchFavoriteMoviesThunk(id)),
    removeFavoriteMovie: (userID, movieID) =>
      dispatch(removeFavoriteMovieThunk(userID, movieID)),
  };
};

export default connect(mapState, mapDispatch)(ProfileContainer);
