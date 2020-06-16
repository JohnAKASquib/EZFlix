import React from "react";
import "./App.css";
import HomePageContainer from "../components/containers/HomePageContainer";
import NavBarContainer from "../components/containers/NavBarContainer";
function App() {
  return (
    <div className="whole-page">
      <NavBarContainer />
      <HomePageContainer />
    </div>
  );
}

export default App;
