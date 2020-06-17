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
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
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
      error={this.props.error}
    />;
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
}

const mapDispatch = (dispatch) => {
  return {
    signUp: (email, password) => dispatch(signUpThunk(email, password))
  }
}

export default connect(mapState, mapDispatch)(SignUpPageContainer);
