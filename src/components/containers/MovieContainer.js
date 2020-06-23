import React, { Component } from "react";
import MovieView from "../views/MovieView";
import { connect } from "react-redux";
import { fetchMovieThunk, addFavoriteMovieThunk } from "../../thunks";

class MovieContainer extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
    }

    handleSubmit = (id) => {
      this.props.addFavoriteMovie(id);
    }

    render() {
        return <MovieView movie={this.props.movie} handleSubmit={this.handleSubmit} isLoggedIn={this.props.isLoggedIn} />;
    }
}

// map state to props
const mapState = (state) => {
  return {
    movie: state.movie,
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchMovie: (id) => dispatch(fetchMovieThunk(id)),
    addFavoriteMovie: (id) => dispatch(addFavoriteMovieThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(MovieContainer);
