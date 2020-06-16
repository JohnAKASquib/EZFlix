import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  LoginPageContainer,
  SignUpPageContainer,
} from "../containers";
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
