import React from "react";
import "./styles/LoginPageView.css";
import 'bootstrap/dist/css/bootstrap.css';

const LoginPageView = (props) => {
  return (
    <div className="page p-5">
      <form className="center" onSubmit={props.handleSubmit}>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={props.handleChange} required/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" name="password" onChange={props.handleChange} required/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me </label>
        </div>
        <button type="submit" className="btn btn-dark">Login</button>
      </form>
    </div>
  );
};

export default LoginPageView;
