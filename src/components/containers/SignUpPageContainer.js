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

    if (isValidPassword) {
      errors.name = "Valid password";
    }
    this.setState({ isValidPassword, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isValidPassword) {
      this.props.signUp(this.state.email, this.state.password);
      this.props.history.push("/login");
    }
  };

  render() {
    return <SignUpPageView 
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      loggedIn={this.props.loggedIn}
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
    signUp: (email, password) => dispatch(signUpThunk(email, password, ownProps))
  }
}

export default connect(mapState, mapDispatch)(SignUpPageContainer);
