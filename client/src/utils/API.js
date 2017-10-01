import axios from 'axios';

export default {
  //front end routes go here
  getBands: function() {
    return axios.get("/allBands");
  },
  postBandData: function(){
    return axios.post("/addBand");
  }
};
