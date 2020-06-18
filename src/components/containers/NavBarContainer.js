import React, { Component } from "react";
import NavBarView from "../views/NavBarView";
import SearchBarContainer from "../containers/SearchBarContainer";

class NavBarContainer extends Component {
  render() {
    return (
      <>
        <NavBarView />
        {/* <SearchBarContainer /> */}
      </>
    );
  }
}

export default NavBarContainer;
