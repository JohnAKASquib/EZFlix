import React from "react";

const SignUpPageView = () => {
  return (
    <form className="center">
      <div className="text-field">
        Username: <input type="text" className="input-field" />
      </div>
      <div className="text-field">
        Password:
        <input type="text" className="input-field" />
      </div>
      <div className="text-field">
        Confirm Password:
        <input type="text" className="input-field" />
      </div>
      <button className="login-button">Sign Up</button>
    </form>
  );
};

export default SignUpPageView;
