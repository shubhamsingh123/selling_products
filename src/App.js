import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homepage/HomePage.component";

const HatsPage = () => (
  <div>
    <h1>Welcome into the Hats Section</h1>
  </div>
);

const firstpage = () => (
  <div>
    <h1>Welcome into the First Pages Section</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route path="/hats" component={HatsPage} />
      <Route path="/firstPage" component={firstpage} />
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
