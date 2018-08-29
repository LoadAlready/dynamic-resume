import React, { Component } from "react";
import Welcome from "./containers/Welcome";
import "animate.css";
import "./App.css";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Welcome />
      </div>
    );
  }
}

export default App;
