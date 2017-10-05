import React, { Component } from 'react';
import './Admin.css';

class Admin extends Component{
  constructor(){
    super();
    this.state = {

    }
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
        <h1>Welcome to the admin page</h1>
        <button onClick={this.handleNewBand}>Add new band</button>
        <button onClick={this.manageBands}>Manage existing bands</button>
        {/*<Form/>*/}
      </div>

    )
  }
}



export default Admin;
