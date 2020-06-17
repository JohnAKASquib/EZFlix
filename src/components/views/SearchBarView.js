import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
const SearchBarView = () => {
  return (
    <div class="collapse navbar-collapse float-right" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown float-right">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select a Genre
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Comedy</a>
          <a class="dropdown-item" href="#">Drama</a>
          <a class="dropdown-item" href="#">Horror</a>
        </div>
        </li>
      </ul>
      
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>

    </div>

    
  );
};

export default SearchBarView;
