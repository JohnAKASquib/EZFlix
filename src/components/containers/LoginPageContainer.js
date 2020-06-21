import React, { Component } from "react";
import LoginPageView from "../views/LoginPageView";
import { connect } from"react-redux";
import { loginThunk } from "../../thunks";

class LoginPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <LoginPageView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        loggedIn={this.props.loggedIn}
        userEmail={this.props.userEmail}
        error={this.props.error}
      />
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    login: (email, password) => dispatch(loginThunk(email, password, ownProps)),
  };
};

export default connect(mapState, mapDispatch)(LoginPageContainer);
