import React, { Component } from 'react';
import API from '../../utils/API';
import './DisplayGenres.css';

class DisplayGenres extends Component{
  constructor(){
    super();
    this.state = {
      bands:[]
    }
  }
  componentDidMount(){
    API.getBands()
        .then(res =>
          this.setState({
            bands:res.data
          })
        )
        .catch(err => console.log(err));
  }
  render(){
    return(
      <div className="row">
        {this.state.bands.map(x => {
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
