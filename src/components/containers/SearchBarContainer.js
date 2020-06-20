import React, { Component } from "react";
import SearchBarView from "../views/SearchBarView";
import { connect } from "react-redux";
import { searchForMoviesThunk, byGenreThunk } from "../../thunks";

class SearchBarContainer extends Component {
  constructor() {
    super();
    this.state = {
      genreId: 0,
      searchTerm: "",
    };
  }

  handleGenreChange = (e) => {
    //this is all that was needed :'(
    this.setState({ genreId: e.target.value }, () => {
      console.log(this.state.genreId);
    });
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
    if (this.state.genreId !== 0) {
      this.props.getByGenre(this.state.genreId);
    } else if (this.state.searchTerm !== "") {
      this.props.searchForMovies(this.state.searchTerm);
    }
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
    searchForMovies: (searchTerm) => dispatch(searchForMoviesThunk(searchTerm)),
    getByGenre: (id) => dispatch(byGenreThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(SearchBarContainer);
