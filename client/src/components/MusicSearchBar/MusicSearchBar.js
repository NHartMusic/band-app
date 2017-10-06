import React, { Component } from 'react';
import "./MusicSearchBar.css";

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      filteredBands: this.props.bandStuff,
      searchGenre : ""
    }
  }

  filterBandsByGenre(genre){
    var result = [];
    for(let i = 0; i < this.props.bandStuff.length; i++ ){
      if(this.props.bandStuff[i].genre === genre){
        result.push(this.props.bandStuff[i]);
      }
    }
    this.props.callBackFromParent(result);
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      searchGenre: e.target.value
    })

    this.filterBandsByGenre(this.state.searchGenre);
  }

  handleFilter = (e) => {
    this.filterBandsByGenre(this.state.searchGenre)
  }

  render(){
    return(
      <div className="row">
        <ul>
        {/*this.state.filteredBands.map(x =><li>{x.name}</li>)*/}
        </ul>
        <div className = "row">
          <input
           id="genre"
            value = {this.state.searchGenre}
            onChange = {this.handleChange}
            name="genreSearch"
            type="text"
            placeholder="Filter by Genre"
          />
        </div>

        {/*<div className = "row">
          <button onClick={this.handleFilter}>Filter</button>
            <input
              name="genreSearch"
              type="text"
              placeholder="Filter by Band"
            />
        </div>*/}
      </div>
    )
  }
}



export default SearchBar;
