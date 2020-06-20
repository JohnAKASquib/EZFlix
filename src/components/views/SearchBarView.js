import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const SearchBarView = (props) => {
  return (
    <div
      className="collapse navbar-collapse float-right"
      id="navbarSupportedContent"
    >
      <div className="form-group">
        <label
          htmlFor="exampleFormControlSelect1"
          style={{ color: "white", paddingRight: "12px" }}
        >
          Search by Genre
        </label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          style={{ marginRight: "12px" }}
          onChange={props.onGenreChange}
        >
          <option value="0"> </option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="27">Horror</option>
          <option value="18">Drama</option>
        </select>
      </div>

      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          onChange={props.onTermChange}
          aria-label="Search"
        ></input>
        <button
          className="btn btn-outline-light"
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
