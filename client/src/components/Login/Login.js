import React, { Component } from 'react';
import { signIn, signOut, authStateChange } from "../../helpers/auth";

class Login extends Component{
  constructor(){
    super();
    this.state = {

    }
    this.logUserIn = this.logUserIn.bind(this);
    this.logUserOut = this.logUserOut.bind(this);
  }

  logUserIn = (e) => {
    e.preventDefault();
      // console.log('you clicked the login button');
      signIn();
  }

  logUserOut = (e) => {
    e.preventDefault();
    // console.log("you clicked the log out button");
    signOut();
  }

  render(){
    return(
      <div>
        <button onClick={this.logUserIn}>Login</button>
        <button onClick={this.logUserOut}>Logout</button>
      </div>
    )
  }
}

export default Login;
