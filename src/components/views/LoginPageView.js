import React from "react";
import "./styles/LoginPageView.css";
import 'bootstrap/dist/css/bootstrap.css';

const LoginPageView = (props) => {
  return (
    <div>
      <form className="center" onSubmit={props.handleSubmit}>
        <div className="text-field">
          Email: <input type="text" className="input-field" name="email" onChange={props.handleChange} required/>
        </div>
        <div className="text-field">
          Password:
          <input type="password" className="input-field" name="password" onChange={props.handleChange} required/>
        </div>
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPageView;
