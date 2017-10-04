import React, { Component } from 'react';
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
            name="name"
            type="text"
            placeholder="band name"
          />
          <textarea
            value={this.state.bio}
            name="bio"
            type="text"
            placeholder="band bio"
          />
          <input
            value={this.state.photoURL}
            name="photo"
            type="text"
            placeholder="photo url"
          />
          <input
            value={this.state.genre}
            name="genre"
            type="text"
            placeholder="band genre"
          />
          <input
            value={this.state.location}
            name="location"
            type="text"
            placeholder="location"
          />
          <input
            value={this.state.soundcloudURL}
            name="soundcloud"
            type="text"
            placeholder="soundcloud url"
          />
          <input
            value={this.state.facebookURL}
            name="facebook"
            type="text"
            placeholder="facebook url"
          />
          <input
            value={this.state.youtubeURL}
            name="youtube"
            type="text"
            placeholder="youtube url"
          />
        </div>
      </panel>
    );
  }
}

export default Form;
