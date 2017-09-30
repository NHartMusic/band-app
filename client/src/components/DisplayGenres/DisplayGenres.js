import React, { Component } from 'react';
import API from '../../utils/API';
import './DisplayGenres.css';

class DisplayGenres extends Component{
  constructor(props){
    super(props);
    // this.state = {
    //
    // }
  }

  render(){
    return(
      <div className="row">
        {this.props.bandData.map(x => {
          return(
            <div className="oneBand">
              <h3>{x.name}</h3>
              <p>Genre: <em>{x.genre}</em></p>
              <img
              className="bandImg"
              src={x.photoURL}
              alt="band gathering together"/>
            </div>
          )
        })}
      </div>
    )
  }
}



export default DisplayGenres;
