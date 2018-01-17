const mongoose = require('mongoose');

var urlSchema = new mongoose.Schema({
    original_url: String,
    short_url: String
});

module.exports = mongoose.model('URL', urlSchema);