import React from "react";
import "./styles/LoginPageView";

const LoginPageView = () => {
  return (
    <div className="login-page">
      <input type="text">Username: </input>
      <input type="text">Password: </input>
      <button className="login-button">Login</button>
    </div>
  );
};

export default LoginPageView;
