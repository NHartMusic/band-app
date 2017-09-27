import React, { Component } from 'react';
import Form from "../../components/Form/Form";

class BandSignUp extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <h2>Welcome user{/*gmail name will go here*/}</h2>
        <h4>Tell us more about yourself</h4>
        <Form/>
      </div>
    )
  }
}



export default BandSignUp;
