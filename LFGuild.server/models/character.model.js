const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
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
    status: String,
    rating: Number,
    history: [{ type: mongoose.Schema.ObjectId, ref: 'History' }],
    comments: [{ type: mongoose.Schema.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Character', CharacterSchema);