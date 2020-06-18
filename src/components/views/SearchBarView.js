import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const SearchBarView = (props) => {
  return (
    <div
      class="collapse navbar-collapse float-right"
      id="navbarSupportedContent"
    >
      <div class="form-group">
        <label
          for="exampleFormControlSelect1"
          style={{ color: "white", paddingRight: "12px" }}
        >
          Search by Genre
        </label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          style={{ marginRight: "12px" }}
          onChange={props.onGenreChange}
        >
          <option value=""> </option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="27">Horror</option>
          <option value="18">Drama</option>
        </select>
      </div>

      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          onChange={props.onTermChange}
          aria-label="Search"
        ></input>
        <button
          class="btn btn-outline-light"
          onClick={props.onSubmit}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBarView;
