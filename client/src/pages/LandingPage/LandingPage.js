import React, { Component } from 'react';
import Login from "../../components/Login/Login";

class Landing extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  goSearchForMusic = (e) => {
    e.preventDefault();
    window.location.pathname = "/music-options";
  }

  render(){
    return(
      <div>
        <h1>Welcome to the band app</h1>
        <h3>Are you a user or an admin?</h3>
        <div className="row">
        <div className="col-md-6">
          <button onClick={this.goSearchForMusic}>Continue as a User</button>
        </div>
          <Login/>
        </div>
      </div>
    )
  }
}

export default Landing;
