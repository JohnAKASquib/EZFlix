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
  handleTermChange = (e) => {
    console.log(
      "inside of handle term change the search term is " + e.target.value
    );
    this.setState({
      searchTerm: e.target.value,
    });
    console.log(wholeURL);
  };
  handleSubmit = () => {
    this.props.searchForMovies(wholeURL + this.state.searchTerm);
  };

  render() {
    return (
      <SearchBarView
        onTermChange={this.handleTermChange}
        onGenreChange={this.handleGenreChange}
        onSubmit={this.handleSubmit}
        genreId={this.state.genreId}
        searchTerm={this.state.searchTerm}
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
