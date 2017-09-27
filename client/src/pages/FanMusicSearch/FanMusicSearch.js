import React, { Component } from 'react';
import MusicSearchBar from "../../components/MusicSearchBar/MusicSearchBar";
import DisplayGenres from "../../components/DisplayGenres/DisplayGenres";
import './FanMusicSearch.css';

class FanMusicSearch extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className="musicSearch">
        <h2>Well hello there?</h2>
        <h4>What kind of music are you looking for?</h4>
        <MusicSearchBar/>
        <DisplayGenres/>
      </div>
    )
  }
}



export default FanMusicSearch;
