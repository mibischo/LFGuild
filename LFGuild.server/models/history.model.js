const mongoose = require('mongoose');

const HistorySchema = mongoose.Schema({
    character: { type: mongoose.Schema.Types.ObjectId, ref: 'Character' },
    person: String,
    action: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('History', HistorySchema);