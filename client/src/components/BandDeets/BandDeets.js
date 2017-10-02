import React, { Component } from 'react';
import "./BandDeets.css";

class BandDeets extends Component{
  constructor(props){
    super(props);
  }

  componentDidUpdate(){
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <img
          src={this.props.bandsData.photoURL}
          alt="dogs singing"
          className="bandProfilePicture"/>
        </div>
        <div className="col-md-6">
          <h2>{this.props.bandsData.name}</h2>
          <h4>{this.props.bandsData.bio}</h4>
          <p>*Social Media icons go here*</p>
        </div>
      </div>
    )
  }
}



export default BandDeets;
