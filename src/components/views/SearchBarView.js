import React from "react";
import "./styles/SearchBarView.css";
const SearchBarView = () => {
  return (
    <div className="search-area">
      <select className="select-bar">
        <option value="null">Select a Genre</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="horror">Horror</option>
        <option value="drama">Drama</option>
      </select>
      <input type="text" id="input-field" />
      <button id="search-button">Search!</button>
    </div>
  );
};

export default SearchBarView;
