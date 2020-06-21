import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/LoginPageView.css";

const SignUpPageView = (props) => {
  return (
    <div className="page p-5">
      {props.loggedIn ? `The current logged in user is: ${props.userEmail}` : ""}
      <form className="center" onSubmit={props.handleSubmit}>
        
        <div className="form pb-5">
          Email Address:
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="text-warning">Password must be at least 6 characters long!</div>
        <div className="form pb-4">
          Password:
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={props.handleChange}
            required
          />
          
        </div>
        <div className="form pb-4">
          Confirm Password:
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            onChange={props.handleChange}
            required
          />
        </div>
        {props.error && props.error.response && <div> {props.error.response.data} </div>}
                <button className="btn btn-dark" type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUpPageView;
