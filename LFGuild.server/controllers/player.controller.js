const Player = require('../models/player.model.js');

// Create and Save a new Player
exports.create = (req, res) => {
    console.log(req.body);
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Player name can not be empty"
        });
    }

    // Create a Player
    const player = new Player({
        PlayerName: req.body.battletag || req.body.name, 
        Battletag: req.body.battletag
    });

    // Save Player in the database
    player.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Player."
        });
    });
};

// Retrieve and return all Players from the database.
exports.findAll = (req, res) => {
    Player.find()
    .then(players => {
        res.send(players);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving players."
        });
    });
};

// Find a single Player with a PlayerId
exports.findOne = (req, res) => {
    Player.findById(req.params.playerId)
    .then(player => {
        if(!player) {
            return res.status(404).send({
                message: "Player not found with id " + req.params.playerId
            });            
        }
        res.send(player);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Player not found with id " + req.params.playerId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving player with id " + req.params.playerId
        });
    });
};

// Update a Player identified by the PlayerId in the request
exports.update = (req, res) => {

};

// Delete a Player with the specified PlayerId in the request
exports.delete = (req, res) => {

};