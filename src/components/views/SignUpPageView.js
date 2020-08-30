import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/LoginPageView.css";
import PropTypes from "prop-types";

const SignUpPageView = (props) => {
  return (
    <div className="page p-5">
      <form className="center" onSubmit={props.handleSubmit}>
        <p style={{ color: "red" }}>* Required</p>
        <div className="form pb-5">
          Email Address: <span style={{ color: "red" }}>*</span>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="text-warning">
          Password must be at least 6 characters long!
        </div>
        <div className="form pb-4">
          Password: <span style={{ color: "red" }}>*</span>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="form pb-4">
          Confirm Password: <span style={{ color: "red" }}>*</span>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="form pb-4">
          Profile Image:
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            onChange={props.handleChange}
          />
        </div>
        {props.isValidPassword ? (
          <div></div>
        ) : (
          <div style={{ color: "red", fontWeight: "bold" }}>
            {props.errors.name}
          </div>
        )}
        <button className="btn btn-dark" type="submit">
          Sign Up!
        </button>
      </form>
    </div>
  );
};

SignUpPageView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValidPassword: PropTypes.bool.isRequired,
};

export default SignUpPageView;
