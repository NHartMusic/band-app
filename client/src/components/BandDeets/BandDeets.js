import React, { Component } from 'react';

class BandDeets extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <img
          src="http://funnyfilez.funnypart.com/pictures/FunnyPart-com-new_band.jpg"
          alt="dogs singing"/>
        </div>
        <div className="col-md-6">
          <h2>Bark Street Boys</h2>
          <h4>Bark street boys sings about chasing cats and peeing on fire hydrants</h4>
          <p>*Social Media icons go here*</p>
        </div>
      </div>
    )
  }
}



export default BandDeets;
