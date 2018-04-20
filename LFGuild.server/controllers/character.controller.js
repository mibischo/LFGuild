const Character = require('../models/character.model.js');
const History = require('../models/history.model.js');
const crypto = require('crypto');
const mongoose = require('mongoose');

// Create and Save a new character
exports.create = (req, res) => {
    console.log(req.body);
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "character name can not be empty"
        });
    }

    // Create a character
    const character = new Character({
        _id: new mongoose.Types.ObjectId(),
        hash: crypto.createHash('md5').update(req.body.name + req.body.server).digest('hex'),
        name: req.body.name,
        server: req.body.server,
        ilvl: req.body.ilvl,
        charlink: req.body.charlink,
        timestamp: req.body.timestamp,
        race: req.body.race,
        clazz: req.body.clazz,
        battletag: req.body.battletag,
        languages: req.body.languages,
        transfer: req.body.transfer,
        raidsPerWeek: req.body.raidsPerWeek,
        specs: req.body.specs,
        pveScore: req.body.pveScore,
        mlusScore: req.body.mPlusScore,
        guild: req.body.guild,
        guildlink: req.body.guildlink,
        faction: req.body.faction,
        armory: req.body.armory,
        status: 'Neu'
    });

    console.log(character);

    // Save character in the database
    character.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the character."
        });
    });
};

// Retrieve and return all characters from the database.
exports.findAll = (req, res) => {
    Character.find()
    .populate('history')
    .populate('comments')
    .then(characters => {
        res.send(characters);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving characters."
        });
    });
};

// Find a single character with a characterId
exports.findOne = (req, res) => {
    Character.findOne({ hash: req.params.hash })
    .populate('history')
    .populate('comments')
    .then(character => {
        if(!character) {
            return res.status(404).send({
                message: "character not found with hash " + req.params.hash
            });            
        }
        res.send(character);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "character not found with hash " + req.params.hash
            });                
        }
        return res.status(500).send({
            message: "Error retrieving character with hash " + req.params.hash
        });
    });
};

// Update a character identified by the characterId in the request
exports.update = (req, res) => {
    if(!req.body.hash) {
        return res.status(400).send({
            message: "character hash can not be empty"
        });
    }
    
    Character.findOneAndUpdate({ hash: req.params.hash }, {
        hash: req.body.hash,
        name: req.body.name,
        server: req.body.server,
        ilvl: req.body.ilvl,
        charlink: req.body.charlink,
        timestamp: req.body.timestamp,
        race: req.body.race,
        clazz: req.body.clazz,
        battletag: req.body.battletag,
        languages: req.body.languages,
        transfer: req.body.transfer,
        raidsPerWeek: req.body.raidsPerWeek,
        specs: req.body.specs,
        pveScore: req.body.pveScore,
        mPlusScore: req.body.mPlusScore,
        guild: req.body.guild,
        guildlink: req.body.guildlink,
        faction: req.body.faction,
        armory: req.body.armory
    }, {new: true})
    .then(character => {
        if(!character) {
            return res.status(404).send({
                message: "character not found with hash " + req.params.hash
            });            
        }
        res.send(character);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "character not found with hash " + req.params.hash
            });                
        }
        return res.status(500).send({
            message: "Error retrieving character with hash " + req.params.hash
        });
    });
};

export.setStatus = (req, res) => {
    if(!req.body.status) {
        return res.status(400).send({
            message: "character hash can not be empty"
        });
    }
    
    Character.findOne({ hash: req.params.hash })
    .then(character => {
        if(!character) {
            return res.status(404).send({
                message: "character not found with hash " + req.params.hash
            });            
        }
        
        const history = new History({
            _id: new mongoose.Types.ObjectId(),
            character: character._id,
            person: 'Delgrasch',
            action: 'Status changed: ' + character.status + ' -> ' + req.body.status
        });
        
        Character.findOneAndUpdate({ hash: hash }, { status: req.body.status })
        .then(c => {
            history.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the character."
                });
            });
    });
        })
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "character not found with hash " + req.params.hash
            });                
        }
        return res.status(500).send({
            message: "Error retrieving character with hash " + req.params.hash
        });
    });
}

// Delete a character with the specified characterId in the request
exports.delete = (req, res) => {
    Character.findOneAndRemove({ hash: req.params.hash })
    .then(character => {
        if(!character) {
            return res.status(404).send({
                message: "character not found with hash " + req.params.hash
            });            
        }
        res.send(character);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "character not found with hash " + req.params.hash
            });                
        }
        return res.status(500).send({
            message: "Error retrieving character with hash " + req.params.hash
        });
    });
};