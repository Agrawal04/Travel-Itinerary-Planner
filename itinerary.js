const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    places: [
        {
            Day: String,
            Place: String,
            Location: String,
            Rating: String,
            "Open Time": String,
            "Close Time": String,
            Description: String
        }
    ]
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);
module.exports = Itinerary;
