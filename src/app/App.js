import React from "react";
import "./App.css";
import NavBarContainer from "../components/containers/NavBarContainer";
import RoutesContainer from "../components/routes/RoutesContainer";
function App() {
  return (
    <div className="whole-page">
      <NavBarContainer />
      <RoutesContainer />
    </div>
  );
}

export default App;
