import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import SearchBarView from "./SearchBarView";

const NavBarView = (props) => {
  console.log(props.loggedInUser);
  let buttons;
  if (props.isLoggedIn) {
    buttons = (
      <li className="nav-item">
        <a className="nav-link" onClick={props.handleLogout}>
          Logout
        </a>
      </li>
    );
  } else {
    buttons = (
      <>
        {" "}
        <Link to={`/login`}>
          <li className="nav-item">
            <a className="nav-link" href={`/login`}>
              Login
            </a>
          </li>
        </Link>
        <Link to={`/signup`}>
          <li className="nav-item">
            <a className="nav-link" href={`/signup`}>
              Sign Up
            </a>
          </li>
        </Link>
      </>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <Link to={`/`}>
          <li className="nav-item active">
            <a className="nav-link" href={`/`}>
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
        </Link>
        {buttons}
      </ul>
      <form className="form-inline my-2 my-lg-0 float-right">
        <SearchBarView />
      </form>
    </nav>
  );
};

export default NavBarView;
