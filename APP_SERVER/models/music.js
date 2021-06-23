const mongoose = require('mongoose');

var artist = new mongoose.Schema({

    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    city: {type: String, required: true}
});

var customer = new mongoose.Schema({

    customer_first_name: {type: String, required: true},
    customer_last_name: {type: String, required: true},
    customer_address: {type: String, required: true},
    postal_code: {type: String, required: true},
    card_details: {type: String, required: true}
});

var musicSchema = new mongoose.Schema({

    artist_bio : [artist],
    songname: {type: String, required: true},
    album: {type: String, required: true},
    language: {type: String, required: true},
    sold: {type: String, required: true},
    available_online: {type: String, required: true},
    customer_details: [customer]
});

var musicModel = mongoose.model('Music', musicSchema, 'musics');

module.exports = {musicModel};