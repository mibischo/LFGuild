const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
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
    history: [{ type: Schema.Types.ObjectId, ref: 'History' }],
    comments: [{ type: Schema.Types.objectId, ref: 'Comment' }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', CharacterSchema);