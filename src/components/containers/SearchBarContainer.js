import React, { Component } from "react";
import SearchBarView from "../views/SearchBarView";
import { connect } from "react-redux";
import {
  searchForMoviesThunk,
  byGenreThunk,
  searchByTermAndIdThunk,
} from "../../thunks";
import { withRouter } from "react-router-dom";

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
    const search = e.target.value.trim();
    this.setState({
      searchTerm: search,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const genre = Number(this.state.genreId);

    if (genre !== 0 && this.state.searchTerm !== "") {
      console.log("search by genre and search term");
      this.props.getByGenreAndTerm(this.state.searchTerm, this.state.genreId);
    } else if (genre !== 0) {
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
const mapDispatch = (dispatch, ownProps) => {
  return {
    searchForMovies: (searchTerm) =>
      dispatch(searchForMoviesThunk(searchTerm, ownProps)),
    getByGenre: (id) => dispatch(byGenreThunk(id, ownProps)),
    getByGenreAndTerm: (term, id) =>
      dispatch(searchByTermAndIdThunk(term, id, ownProps)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(SearchBarContainer));
