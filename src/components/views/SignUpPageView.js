import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const SignUpPageView = (props) => {
  return (
    <div>
      {props.loggedIn ? `The current logged in user is: ${props.userEmail}` : ""}
      <form className="center" onSubmit={props.handleSubmit}>
        <p className="lead">Passwords must be at least 6 characters</p>
        <div className="text-field">
          Email:
          <input
            type="email"
            className="input-field"
            name="email"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="text-field">
          Password:
          <input
            type="password"
            className="input-field"
            name="password"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="text-field">
          Confirm Password:
          <input
            type="password"
            className="input-field"
            name="confirmPassword"
            onChange={props.handleChange}
            required
          />
        </div>
        {props.error && props.error.response && <div> {props.error.response.data} </div>}
        <button className="login-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPageView;
