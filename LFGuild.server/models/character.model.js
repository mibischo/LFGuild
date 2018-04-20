const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
    hash: String,
    CharacterName: String,
    Server: String,
    ILvl: String,
    Charlink: String,
    Timestamp: Date,
    Race: String,
    Clazz: String,
    Battletag: String,
    Languages: String,
    Transfer: String,
    RaidsPerWeek: String,
    Specs: String,
    PveScore: String,
    MPlusScore: String,
    Guild: String,
    GuildLink: String,
    Faction: String,
    Armory: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', CharacterSchema);