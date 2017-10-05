import React, { Component } from 'react';
import {signOut} from "../../helpers/auth";
import './Admin.css';
import Form from "../../components/Form/Form";

class Admin extends Component{
  constructor(){
    super();
    this.state = {
    }
  }

  logUserOut = (e) => {
    e.preventDefault();
    // console.log("you clicked the log out button");
    signOut().then(function() {
      // Sign-out successful.
      console.log("You've signed out");
      window.location.pathname = "/";
    }).catch(function(error) {
      // An error happened.
    });;
  }

  handleNewBand = (e) => {
    e.preventDefault();
    window.location.pathname = "/signup";
  }

  manageBands = (e) => {
    e.preventDefault();
    window.location.pathname = "/manage-bands";
  }

  render(){
    return(
      <div>
        <a onClick={this.logUserOut} href="/">Logout</a>
        <h1>Welcome to the admin page</h1>
        <button onClick={this.handleNewBand}>Add new band</button>
        <button onClick={this.manageBands}>Manage existing bands</button>
        {/*<Form/>*/}
      </div>

    )
  }
}



export default Admin;
