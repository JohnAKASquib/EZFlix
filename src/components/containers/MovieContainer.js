import React, { Component } from "react";
import MovieView from "../views/MovieView";
import { connect } from "react-redux";
import { fetchMovieThunk } from "../../thunks";

class MovieContainer extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);
    }

    render() {
        return <MovieView movie={this.props.movie}/>;
    }
}

// map state to props
const mapState = (state) => {
  return {
    movie: state.movie,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchMovie: (id) => dispatch(fetchMovieThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(MovieContainer);