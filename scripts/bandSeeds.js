const mongoose = require("mongoose");
const Bands = require("../models/Bands.js");
// mongoose.Promise = global.Promise;
// // This file empties the Books collection and inserts the books below
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/bandapp",
//   {
//     useMongoClient: true
//   }
// );
const BandSeed = [
  {
    name: "The Velvet Touch",
    photoURL: "http://bit.ly/2hCoGRz",
    genre: "soul",
    location: "berkely",
    bio: "best christian metal band ever",
    newMemberSearch: true,
    gigs:["Greek Theater, 10/17/2017"],

  },
  {
    name: "Penumbral Rise",
    photoURL: "http://bit.ly/2x5bStV",
    genre: "psych",
    location: "sf",
    bio: "best christian metal band ever",
    newMemberSearch: true,
    gigs:["McDonalds, 10/17/2017"]

  },
  {
    name: "Deerhunter",
    photoURL: "http://bit.ly/2xTK2Q2",
    genre:"psych",
    location:"sf",
    bio: "best christian metal band ever",
    newMemberSearch: true,
    gigs:["The Midway SF, 10/1/2017"]

  },
  {
    name: "Thee Oh Sees",
    photoURL: "http://bit.ly/2xSz0Lg",
    genre:"garage",
    location:"sf",
    bio: "best christian metal band ever",
    newMemberSearch: true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "Babewatch",
    photoURL: "http://bit.ly/2wrnzqx",
    genre:"garage",
    location:"oakland",
    bio: "best christian metal band ever",
    newMemberSearch: true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "Battles",
    photoURL: "http://bit.ly/2xatBQL",
    genre:"psych",
    location:"sf",
    bio: "best christian metal band ever",
    newMemberSearch: true,
    gigs:["The Midway SF, 10/1/2017"]

  }
  {
    name: "The Seshen",
    photoURL: "http://bit.ly/2xGgZjS",
    genre: "soul",
    location: "oakland",
    bio: "best christian metal band ever",
    newMemberSearch:false,
    gigs:["Great American Music Hall, 9/28/2017"]
  },
  {
    name: "Kid Trails",
    photoURL: "http://bit.ly/2xJQdVi",
    genre:"pop",
    location:"oakland",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["The Chapel, 4/19/2017"]

  },
  {
    name: "WonderWench",
    photoURL: "http://bit.ly/2hClqpw",
    genre:"folk",
    location:"berkely",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "Vetiver",
    photoURL: "http://bit.ly/2xOdZkG",
    genre:"folk",
    location:"richmond",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "Black Mountain",
    photoURL: "http://bit.ly/2wpWTGx",
    genre:"psych",
    location:"sf",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["The Chapel, 3/16/17"]

  },
  {
    name: "Dungen",
    photoURL: "http://bit.ly/2fzPduB",
    genre:"psych",
    location:"sf",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "Todd Rundgren",
    photoURL: "http://bit.ly/2xKIqGK",
    genre:"rock",
    location:"sf",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Chapel, 8/30/17"]

  },
  {
    name: "tUnE-yArDs",
    photoURL: "http://bit.ly/2kff9RF",
    genre:"soul",
    location:"oakland",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["Great American Music Hall, 9/28/2017"]

  },
  {
    name: "Snarky Puppy",
    photoURL: "http://bit.ly/2ygbhFZ",
    genre:"funk",
    location:"sf",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["SF Jazz Gala, 9/28/2017"]

  },
  {
    name: "Talib Kweli",
    photoURL: "http://bit.ly/2fAGDfi",
    genre:"hip hop",
    location:"berkely",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["UC Theatre, 1/21/17"]

  },
  {
    name: "Nicolas Jaar",
    photoURL: "http://bit.ly/2yfk23k",
    genre:"electronic",
    location:"berkely",
    bio: "best christian metal band ever",
    newMemberSearch:true,
    gigs:["UC Theatre, 10/28/16"]

  },
  {
    name: "Charles Bradley",
    photoURL: "http://bit.ly/2yAmjSv",
    genre:"soul",
    location:"sf",
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
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    // process.exit(1);
  });
