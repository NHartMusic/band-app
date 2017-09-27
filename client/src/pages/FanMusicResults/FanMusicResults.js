import React, { Component } from 'react';
import MusicSearchBar from "../../components/MusicSearchBar/MusicSearchBar";
import SearchedBand from "../../components/SearchedBand/SearchedBand";
import './FanMusicResults.css';

class FanMusicSearch extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className="musicResults">
        <MusicSearchBar/>
        <h2>Here are your results for {/*genre goes here*/} music:</h2>
        {/*Our search band component will be mapped
           over here multiple times*/}
        <SearchedBand/>
      </div>
    )
  }
}



export default FanMusicSearch;
