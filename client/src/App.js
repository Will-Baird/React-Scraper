import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/jumbotron/Jumbotron.js";
import Form from "./components/form/Form.js";
import Saved from "./components/saved/Saved.js";

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Form />
        <Saved />
      </div>
    );
  }
}

export default App;
