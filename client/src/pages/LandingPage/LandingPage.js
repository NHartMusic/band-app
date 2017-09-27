import React, { Component } from 'react';
import Login from "../../components/Login/Login";

class Landing extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <h1>Welcome to the band app</h1>
        <h3>Are you a band or a fan?</h3>
        <Login/>
      </div>
    )
  }
}

export default Landing;
