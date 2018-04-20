const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
    hash: String,
    name: String,
    server: String,
    ilvl: String,
    charlink: String,
    timestamp: Date,
    race: String,
    clazz: String,
    battletag: String,
    languages: String,
    transfer: String,
    raidsPerWeek: String,
    specs: String,
    pveScore: String,
    mPlusScore: String,
    guild: String,
    guildlink: String,
    faction: String,
    armory: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', CharacterSchema);