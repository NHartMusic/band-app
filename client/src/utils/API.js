import axios from 'axios';

export default {
  //front end routes go here
  getBands: function() {
    return axios.get("/api/allBands");
  },
  postBandData: function(){
    return axios.post("/api/addBand");
  },
  getOneBand: function(band_id){
    // console.log("this is the bands real id: ", band_id);
    return axios.get("/api/profile/" + band_id);
  },
  getOneBandsGigs: function(band_id){
    // console.log("this is the bands real id: ", band_id);
    return axios.get("/api/gigs/" + band_id);
  },
  saveBand: function(bandData) {
    return axios.post("/api/createBand", bandData);
  },
  deleteBand: function(band_id){
    return axios.delete("/api/deleteBand/" + band_id)
  }
};
