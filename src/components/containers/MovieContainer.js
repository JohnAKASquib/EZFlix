import React, { Component } from "react";
import MovieView from "../views/MovieView";
import { connect } from "react-redux";
import { fetchMovieThunk, addFavoriteMovieThunk, me } from "../../thunks";

class MovieContainer extends Component {
    componentDidMount() {
        this.props.loadInitialData();
        this.props.fetchMovie(this.props.match.params.id);
    }

    handleSubmit = (id) => {
        // if (this.props.isLoggedIn) {
          console.log(this.props.isLoggedIn + ", submit " + id);
          this.props.addFavoriteMovie(this.props.movie, id);
        // } else {
        //   console.log("not logged in." + this.props.isLoggedIn);
        // }
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
    loadInitialData: () => dispatch(me()),
    fetchMovie: (id) => dispatch(fetchMovieThunk(id)),
    addFavoriteMovie: (movie, id) => dispatch(addFavoriteMovieThunk(movie, id)),
  };
};

export default connect(mapState, mapDispatch)(MovieContainer);