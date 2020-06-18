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
    try {
      this.props.login(this.state.email, this.state.password);
    } catch(error) {
      console.log(error);
      this.props.history.push("/login");
    }
    this.props.history.push("/");
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

const mapDispatch = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginThunk(email, password)),
  };
};

export default connect(mapState, mapDispatch)(LoginPageContainer);
