import React from "react";
import { Switch, Route } from "react-router-dom";
// {*/import
//   HomePageContainer,
//   LoginPageContainer,
//   SignUpPageContainer,
// from "../containers";*/}
import HomePageContainer from "../containers/HomePageContainer";
import LoginPageContainer from "../containers/LoginPageContainer";
import SignUpPageContainer from "../containers/SignUpPageContainer";
const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/login" component={LoginPageContainer} />
      <Route exact path="/signup" component={SignUpPageContainer} />
    </Switch>
  );
};

export default RoutesView;
