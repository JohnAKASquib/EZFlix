import React, { Component } from "react";
import { connect } from "react-redux";
import RoutesView from "./RoutesView";
import { me } from "../../thunks";

class RoutesContainer extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  
  render() {
    return <RoutesView />;
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => dispatch(me()),
  };
};

export default connect(mapState, mapDispatch)(RoutesContainer);
