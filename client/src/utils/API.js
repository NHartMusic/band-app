import axios from 'axios';

export default {
  //front end routes go here
  getBands: function() {
    return axios.get("/allBands");
  },
  postBandData: function(){
    return axios.post("/addBand");
  },
  getOneBand: function(band_id){
    // console.log("this is the bands real id: ", band_id);
    return axios.get("/profile/" + band_id);
  },
  getOneBandsGigs: function(band_id){
    // console.log("this is the bands real id: ", band_id);
    return axios.get("/gigs/" + band_id);
  },
  saveBand: function(bandData) {
    return axios.post("/createBand", bandData);
  }
};
