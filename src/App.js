import React, { Component } from "react";
import "./App.css";
import { HomePage } from "./HomePage.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      collection: []
    };
  }
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
