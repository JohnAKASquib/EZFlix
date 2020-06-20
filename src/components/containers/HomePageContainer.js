import React, { Component } from "react";
import HomePageView from "../views/HomePageView";
import { connect } from "react-redux";
import { fetchAllMoviesThunk } from "../../thunks";

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchAllMovies();
    console.log("hi");
  }

  render() {
    return (
      <>
        <HomePageView allMovies={this.props.allMovies} />
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

export default connect(mapState, mapDispatch)(HomePageContainer);
