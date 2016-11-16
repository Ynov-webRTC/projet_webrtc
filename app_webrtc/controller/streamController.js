"use strict";
var uniqid = require("uniqid");
var streamModel = require("../model/streamModel");
var colors = require("colors/safe");

var Stream = function () {
    console.log("stream");
};

Stream.prototype.create = function (req, callback) {
    var id_stream = uniqid();
    var stream = new streamModel({"id_stream": id_stream});
    stream.save();
    var url = "http://" + req.get("host") + "/stream/" + id_stream;
    callback(url);
};

Stream.prototype.start = function (id_stream, callback) {
    console.log("lancement du stream " + id_stream);
    this.findStreamById(id_stream, function (model) {
        callback(model);
    });
};

Stream.prototype.findStreamById = function (id_stream, done) {
    streamModel.findOne({id_stream: id_stream}, function (err, model) {
        if (err) {
            console.log(colors.red(err));
        } else {
            done(model);
        }
    });
};

module.exports = Stream;
