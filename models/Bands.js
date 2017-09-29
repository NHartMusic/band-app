// Require mongoose
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create new schema
const BandSchema = new Schema({
    name: {
        type: String,
        required: true
        validate: {
            validator: function(v, cb) {
                User.find({
                    name: v
                }, function(err, docs) {
                    cb(docs.length == 0);
                });
            },
            message: 'User already exists!'
        }
    },
    photoURL: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    soundcloudURL: {
        type: String,
        required: true
    },
    facebookURL: {
        type: String,
        required: true
    },
    youtubeURL: {
        type: String,
        required: true
    },
    newMemberSearch: {
        type: Boolean,
        required: true
    },
    gigs: {
        type: [String],
        required: false
    }

});

// Create the model with the Schema
const Band = mongoose.model("Band", BandSchema);

// Export the model
module.exports = Band;