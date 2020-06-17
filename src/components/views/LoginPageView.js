import React from "react";
import "./styles/LoginPageView.css";
import 'bootstrap/dist/css/bootstrap.css';

const LoginPageView = () => {
  return (
    <form className="center">
      <div className="text-field">
        Username: <input type="text" className="input-field" />
      </div>
      <div className="text-field">
        Password:
        <input type="text" className="input-field" />
      </div>
      <button className="login-button">Login</button>
    </form>
  );
};

export default LoginPageView;
