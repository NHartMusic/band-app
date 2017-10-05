const router = require('express').Router();

//require the controller
const bandController = require("../controllers/bandController.js");

//routes go here
module.exports = router
  .get("/api/allBands",bandController.findAll)
  .get("/api/profile/:id", bandController.findByName)
  .get("/api/gigs/:id", bandController.findByName)
  .post("/api/creatBand", bandController.create)
  .delete("/api/deleteBand/:id", bandController.remove)
