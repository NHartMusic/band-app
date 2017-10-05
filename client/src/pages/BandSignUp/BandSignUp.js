import React, { Component } from 'react';
import Form from "../../components/Form/Form";
// import API from '../../utils/API';

class BandSignUp extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className = "row">
        <div className="col-lg-8" id="heading">
        <a href="/admin">Go back to admin page</a>
          <h2>Add a new band here!</h2>
          <Form/>
        </div>
      </div>
    )
  }
}



export default BandSignUp;
