import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = () => {
  return (
    <div className="nav-text">
      <h1>InstaFlix</h1>
    <div className="nav-bar">
      <Link to={`/`}>
        <button className="buttons">Home</button>
      </Link>
      <Link to={`/login`}>
        <button className="buttons">Login</button>
      </Link>
      <Link to={`/signup`}>
        <button className="buttons">Sign Up</button>
      </Link>
    </div>
    </div>
  );
};

export default NavBarView;
