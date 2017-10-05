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
          <h2>Welcome user{/*gmail name will go here*/}</h2>
          <h4>Tell us more about yourself</h4>
          <Form/>
        </div>
      </div>
    )
  }
}



export default BandSignUp;
