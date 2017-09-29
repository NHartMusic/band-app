//require the models
const db = require("../models");
//export an object with key/value pairs of all the mongoose queries inside
//call-back functions
module.exports = {
    findAll: function(req, res) {
        db.Band
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByName: function(req, res) {
        db.Band
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Band
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateBand: function(req, res) {
        db.Band
            .findOneAndUpdate({
                _id: req.params.id
            }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Band
            .findById({
                _id: req.params.id
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};