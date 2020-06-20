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
import MovieContainer from "../containers/MovieContainer";
import ProfileContainer from "../containers/ProfileContainer";
import SearchPageContainer from "../containers/SearchPageContainer";
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
