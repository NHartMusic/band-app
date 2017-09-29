// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create new schema
const BandSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  photoURL: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  soundcloudURL: {
    type: String,
    required: false
  },
  facebookURL: {
    type: String,
    required: false
  },
  youtubeURL: {
    type: String,
    required: false
  },
  newMemberSearch:{
    type:Boolean,
    required:true
  },
  gigs:{
    type:[String],
    required:false
  }

});

// Create the model with the Schema
const Band = mongoose.model("Band", BandSchema);

// Export the model
module.exports = Band;