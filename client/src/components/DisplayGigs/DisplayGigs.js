import React, { Component } from 'react';

class DisplayGigs extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Address goes here</h3>
        </div>
        <div className="col-md-6">
          <h3>Time</h3>
        </div>
      </div>
    )
  }
}



export default DisplayGigs;
