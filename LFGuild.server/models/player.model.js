const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    PlayerName: String,
    Battletag: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', PlayerSchema);