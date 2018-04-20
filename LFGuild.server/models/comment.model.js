const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    character: { type: Schema.Types.ObjectId, ref: 'Character' },
    comment: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', CommentSchema);