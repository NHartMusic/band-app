import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  filterBandsByGenre = (genre) =>{
    var result = [];
    console.log(this.props);
    for(let i = 0; i < this.props.bandData; i++ ){
      console.log(this.props.bandData[i]);
      console.log("hello");
      // if(this.props.bandData[i].genre === genre){
      //   console.log(this.props.bandData[i]);
      //   // result.push(this.props.bandData[i]);
      // }
    }
    // console.log(result);
  }

  componentDidMount(){
    this.filterBandsByGenre("soul");
  }

  render(){
    return(
      <div className="row">
      {this.props.bandStuff.map(x =>
        <p>{x.name}</p>)}
        <input
          name="genreSearch"
          type="text"
          placeholder="Filter by Genre"
        />
        <input
          name="FilterSearch"
          type="text"
          placeholder="Filter by Band"
        />
        {/*<button>Search</button>*/}
      </div>
    )
  }
}



export default SearchBar;
