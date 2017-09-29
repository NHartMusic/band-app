const router = require('express').Router();

//require the controller
const bandController = require("../controllers/bandController.js");

//routes go here
module.exports = router
  .get("/allBands",bandController.findAll)
 
