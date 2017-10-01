import React, { Component } from 'react';
import './SearchedBand.css';

class SearchedBand extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className="row">
        {/*map through our genre list*/}
        <div className="bandOption">
          <img
            id="dogBand"
            src="http://funnyfilez.funnypart.com/pictures/FunnyPart-com-new_band.jpg"
            alt="band together"
          />
          <p>Bark Street Boys</p>
        </div>
      </div>
    )
  }
}



export default SearchedBand;
