"use strict";
var mongoose = require("mongoose");

var streamSchema = mongoose.Schema({
    id_stream: {
        type: String
    },
    nombreMembre: {
        type: Number,
        min: 0,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var streamModel = mongoose.model("stream", streamSchema);

module.exports = streamModel;
