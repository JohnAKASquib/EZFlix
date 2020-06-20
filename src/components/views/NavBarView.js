import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import SearchBarContainer from "../containers/SearchBarContainer";

const NavBarView = (props) => {
  console.log(props.loggedInUser);
  let buttons;
  if (props.isLoggedIn) {
    buttons = (
      <>
            
          <li className="nav-item">
            <Link className="nav-link" to={`/profile`}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={props.handleLogout}>
              Logout
            </a>
          </li>
        
      </>
    );
  } else {
    buttons = (
      <>
        {" "}
        
          <li className="nav-item">
            <Link className="nav-link" to={`/login`}>
              Login
            </Link>
          </li>
        
        
          <li className="nav-item">
            <Link className="nav-link" to={`/signup`}>
              Sign Up
            </Link>
          </li>
        
      </>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        
          <li className="nav-item active">
          <Link className="nav-link" to={`/`}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
        
        {buttons}
      </ul>
      <div className="form-inline my-2 my-lg-0 float-right">
        <SearchBarContainer />
      </div>
    </nav>
  );
};

export default NavBarView;
