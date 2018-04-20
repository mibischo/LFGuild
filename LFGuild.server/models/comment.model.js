const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    character: { type: mongoose.Schema.ObjectId, ref: 'Character' },
    comment: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);