import React, { Component } from "react";
import NavBarView from "../views/NavBarView";
import SearchBarView from "../views/SearchBarView";


class NavBarContainer extends Component {
  render() {
    return (
    <>
    <NavBarView />
    <SearchBarView/>
    </>
    );
  }
}

export default NavBarContainer;
