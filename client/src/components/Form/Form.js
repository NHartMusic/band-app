import React, { Component } from 'react';
import API from '../../utils/API';
import FormBtn from "./FormBtn";
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      name: "",
      photoURL: "",
      genre: "",
      location: "",
      bio: "",
      soundcloudURL: "",
      facebookURL: "",
      youtubeURL: "",
    };
    // Binding the event listeners which we will pass as props
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Handles the form values and updates the database.
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.photoURL && this.state.genre && this.state.location && this.state.bio && this.state.soundcloudURL && this.state.facebook && this.state.youtubeURL) {
      API.saveBand({
        name: this.state.name,
        photoURL: this.state.photoURL,
        genre: this.state.genre,
        location: this.state.location,
        bio: this.state.bio,
        soundcloudURL: this.state.soundcloudURL,
        facebookURL: this.state.facebook,
        youtubeURL: this.state.youtubeURL
      })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <panel>
      <div className = "container">
          <input
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            type="text"
            placeholder="band name"
          />
          <textarea
            value={this.state.bio}
            onChange={this.handleInputChange}
            name="bio"
            type="text"
            placeholder="band bio"
          />
          <input
            value={this.state.photoURL}
            onChange={this.handleInputChange}
            name="photoURL"
            type="text"
            placeholder="photo url"
          />
          <input
            value={this.state.genre}
            onChange={this.handleInputChange}
            name="genre"
            type="text"
            placeholder="band genre"
          />
          <input
            value={this.state.location}
            onChange={this.handleInputChange}
            name="location"
            type="text"
            placeholder="location"
          />
          <input
            value={this.state.soundcloudURL}
            onChange={this.handleInputChange}
            name="soundcloudURL"
            type="text"
            placeholder="soundcloud url"
          />
          <input
            value={this.state.facebookURL}
            onChange={this.handleInputChange}
            name="facebookURL"
            type="text"
            placeholder="facebook url"
          />
          <input
            value={this.state.youtubeURL}
            onChange={this.handleInputChange}
            name="youtubeURL"
            type="text"
            placeholder="youtube url"
          />
          <FormBtn
                onClick={this.handleFormSubmit}
          >
            Add Band
          </FormBtn>
        </div>
      </panel>
    );
  }
}

export default Form;
