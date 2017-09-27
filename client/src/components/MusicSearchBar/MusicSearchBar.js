import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div className="row">
        <input
          name="searchbar"
          type="text"
          placeholder="look for a specific band in here"
        />
        <button>Search</button>
      </div>
    )
  }
}



export default SearchBar;
