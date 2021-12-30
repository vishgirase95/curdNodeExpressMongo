const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    Name: String,
     Details: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);