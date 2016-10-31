"use strict";
var uniqid = require("uniqid");

var Stream = function () {
    console.log("stream");
};

Stream.prototype.create = function (req) {
    return req.get("host") + "/stream/" + uniqid();
};

Stream.prototype.start = function (id) {
    console.log("lancement du stream " + id);

};

module.exports = Stream;
