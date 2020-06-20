import React, { Component } from "react";
import SearchPageView from "../views/SearchPageView";
import { connect } from "react-redux";
import { fetchAllMoviesThunk } from "../../thunks";

class SearchPageContainer extends Component {
  render() {
    return (
      <>
        <SearchPageView allMovies={this.props.allMovies} />;
      </>
    );
  }
}

const mapState = (state) => {
  return {
    allMovies: state.allMovies,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllMovies: () => dispatch(fetchAllMoviesThunk()),
  };
};

export default connect(mapState, mapDispatch)(SearchPageContainer);
