import React, { Component } from "react";
import SignUpPageView from "../views/SignUpPageView";
import { connect } from "react-redux";
import { signUpThunk } from "../../thunks";
 
class SignUpPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      imageUrl: "",
      isValidPassword: false,
      errors: {},
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, this.validatePassword);
  };

  validatePassword = () => {
    const { password } = this.state;
    const { confirmPassword } = this.state;
    let errors = { ...this.state.errors };

    let isValidPassword = true;

    if (password !== confirmPassword) {
      isValidPassword = false;
      errors.name = "Passwords do no match.";
    }

    if (password.length < 6 || confirmPassword.length < 6) {
      isValidPassword = false;
      errors.name = "Password must be at least 6 characters.";
    }

    if (isValidPassword) {
      errors.name = "Valid password";
    }
    this.setState({ isValidPassword, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isValidPassword) {
      this.props.signUp(this.state.email, this.state.password, this.state.imageUrl);
      this.props.history.push("/login");
    }
  };

  render() {
    return <SignUpPageView 
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      isLoggedIn={this.props.isLoggedIn}
      userEmail={this.props.userEmail}
      errors={this.state.errors}
      isValidPassword={this.state.isValidPassword}
    />;
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    signUp: (email, password, imageUrl) => dispatch(signUpThunk(email, password, imageUrl, ownProps))
  }
}

export default connect(mapState, mapDispatch)(SignUpPageContainer);
