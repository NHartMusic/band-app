import React, { Component } from 'react';
import './DisplayGenres.css';

class DisplayGenres extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className="row">
        {/*map through our genre list*/}
        <img
          id="genrePictures"
          src="http://2.bp.blogspot.com/-20pP-Rei6-c/UFbKhBrFkWI/AAAAAAAAAGQ/FaBC26dcdjs/s1600/custom-genre-art.png"
          alt="genres go here"
        />
      </div>
    )
  }
}



export default DisplayGenres;
