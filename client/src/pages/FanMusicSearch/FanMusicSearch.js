import React, { Component } from 'react';
import MusicSearchBar from "../../components/MusicSearchBar/MusicSearchBar";
import DisplayGenres from "../../components/DisplayGenres/DisplayGenres";
import API from '../../utils/API';
import './FanMusicSearch.css';

class FanMusicSearch extends Component{
  constructor(){
    super();
    this.state = {
      bands : []
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
      <div className="musicSearch">
        <h2>Well hello there?</h2>
        <h4>What kind of music are you looking for?</h4>
        <MusicSearchBar
        bandStuff = {this.state.bands}/>
        <DisplayGenres
         bandData = {this.state.bands}/>
      </div>

    )
  }
}



export default FanMusicSearch;
