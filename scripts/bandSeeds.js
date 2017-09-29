const mongoose = require("mongoose");
const Bands = require("../models/Bands.js");
mongoose.Promise = global.Promise;
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bandapp",
  {
    useMongoClient: true
  }
);
const BandSeed = [
  {
    name: "The Velvet Touch",
    photoURL: "http://bit.ly/2hAzFev",
    genre: "soul",
    location: "berkely",
    bio: "best christian metal band ever",
    newMemberSearch: true,
    gigs:["Greek Theater, 10/17/2017"],

  },
  {
    name: "Penumbral Rise",
    photoURL: "http://bit.ly/2hAzFev",
    genre: "psych",
    location: "sf",
    bio: "best christian metal band ever",
    newMemberSearch: true,
    gigs:["McDonalds, 10/17/2017"]

  },
  {
    name: "Thee Oh Sees",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"garage",
    location:"sf",
    bio: "best christian metal band ever",
    newMemberSearch: true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "The Seshen",
    photoURL: "http://bit.ly/2hAzFev",
    genre: "soul",
    location: "oakland",
    bio: "best christian metal band ever",
    newMemberSearch:false,
    gigs:["Great American Music Hall, 9/28/2017"]
  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "",
    photoURL: "http://bit.ly/2hAzFev",
    genre:"",
    location:"",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  }
];
Bands
  .remove({})
  .then(() => Bands.collection.insertMany(BandSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
