import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import SearchBarContainer from "../containers/SearchBarContainer";

const NavBarView = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto">
        <Link to={`/`}>
          <li class="nav-item active">
            <a class="nav-link" href={`/`}>
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </Link>
        <Link to={`/login`}>
          <li class="nav-item">
            <a class="nav-link" href={`/login`}>
              Login
            </a>
          </li>
        </Link>
        <Link to={`/signup`}>
          <li class="nav-item">
            <a class="nav-link" href={`/signup`}>
              Sign Up
            </a>
          </li>
        </Link>
      </ul>
      <form class="form-inline my-2 my-lg-0 float-right">
        <SearchBarContainer />
      </form>
    </nav>
  );
};

export default NavBarView;
