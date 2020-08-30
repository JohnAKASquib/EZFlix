import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  LoginPageContainer,
  SignUpPageContainer,
  ProfileContainer,
  SearchPageContainer,
  MovieContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/login" component={LoginPageContainer} />
      <Route exact path="/signup" component={SignUpPageContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
      <Route exact path="/search" component={SearchPageContainer} />
      <Route exact path="/movies/:id" component={MovieContainer} />
    </Switch>
  );
};

export default RoutesView;
