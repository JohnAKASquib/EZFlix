import React, { Component } from "react";
import SearchBarView from "../views/SearchBarView";
import { connect } from "react-redux";
import { searchForMoviesThunk } from "../../thunks";
import { Redirect, withRouter } from "react-router-dom";

class SearchBarContainer extends Component {
  constructor() {
    super();
    this.state = {
      genreId: "",
      searchTerm: "",
    };
  }

  handleGenreChange = (e) => {
    this.setState({ genreId: e.target.value });
    console.log("e target value is = " + e.target.value);
    console.log(
      "inside of handle genre change the genre id is now" + this.state.genreId
    );
  };
  handleTermChange = (e) => {
    console.log(
      "inside of handle term change the search term is " + e.target.value
    );

    this.setState({
      searchTerm: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchForMovies(this.state.searchTerm);
    console.log("wonder why its not working");
    //this.props.history.push("/search");
    //return <Redirect to={`/`} />;
  };

  render() {
    return (
      <SearchBarView
        onTermChange={this.handleTermChange}
        onGenreChange={this.handleGenreChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapState = (state) => {
  return {
    foundMovies: state.allMovies,
  };
};

//map dispatch to props
const mapDispatch = (dispatch, ownProps) => {
  return {
    searchForMovies: (searchTerm) =>
      dispatch(searchForMoviesThunk(searchTerm, ownProps)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(SearchBarContainer));
