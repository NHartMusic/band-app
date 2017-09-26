import React, { Component } from 'react';
// import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from "./components/Login/Login";
import './App.css';

class App extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {

    };
    // Binding the event listeners which we will pass as props
  }

  render() {
    return (
      <div>
        <h1>Welcome to the band app</h1>
        <Login/>
      </div>
    );
  }
}

export default App;
