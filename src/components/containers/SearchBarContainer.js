import React, { Component } from "react";
import SearchBarView from "../views/SearchBarView";
import { connect } from "react-redux";
import { searchForMoviesThunk } from "../../thunks";

const genreTerm = "&with_genres=";
const API_KEY = process.env.API_KEY;
const wholeURL =
  "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query="; //Jack+Reacher"

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
      "inside of handle genre change the genre term is now" + this.state.genreId
    );
  };
  handleTermChange = (searchTerm) => {
    console.log(
      "inside of handle term change the search term is " +
        searchTerm.target.value
    );
    this.setState({
      searchTerm: searchTerm.target.value,
    });
    console.log(wholeURL);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchForMovies(this.state.wholeURL + this.state.searchTerm);
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
const mapDispatch = (dispatch) => {
  return {
    searchForMovies: (url) => dispatch(searchForMoviesThunk(url)),
  };
};

export default connect(mapState, mapDispatch)(SearchBarContainer);
