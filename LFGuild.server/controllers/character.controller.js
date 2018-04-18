const Character = require('../models/character.model.js');

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
        CharacterName: req.body.name,
        Server: req.body.server,
        ILvl: req.body.ilvl,
        Charlink: req.body.charlink,
        Timestamp: req.body.timestamp,
        Race: req.body.race,
        Clazz: req.body.clazz,
        Battletag: req.body.battletag,
        Languages: req.body.languages,
        Transfer: req.body.transfer,
        RaidsPerWeek: req.body.raidsPerWeek,
        Specs: req.body.specs,
        PveScore: req.body.pveScore,
        MPlusScore: req.body.mPlusScore,
        Guild: req.body.guild,
        GuildLink: req.body.guildlink,
        Faction: req.body.faction,
        Armory: req.body.armory
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
    character.find()
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
    character.findById(req.params.characterId)
    .then(character => {
        if(!character) {
            return res.status(404).send({
                message: "character not found with id " + req.params.characterId
            });            
        }
        res.send(character);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "character not found with id " + req.params.characterId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving character with id " + req.params.characterId
        });
    });
};

// Update a character identified by the characterId in the request
exports.update = (req, res) => {

};

// Delete a character with the specified characterId in the request
exports.delete = (req, res) => {

};