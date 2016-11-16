"use strict";
var express = require("express");
var router = express.Router();
var streamController = require("../controller/streamController");
//var colors = require("colors/safe");
var stream = new streamController();

router.get("/", function(req, res, next) {
    res.render("index", {title: "WebRTC"});
});

/*router.post("/start", function (req, res, next) {
 var id_stream = req.body.id_stream;
 startStream(id_stream, res);
 });*/

router.get("/create", function (req, res, next) {
    var callback = function (url) {
        res.render("create", {url: url});
    };
    stream.create(req, callback);
});

router.get("/stream/:id", function (req, res, next) {
    var id_stream = req.params.id;
    startStream(id_stream, res);
});

var startStream = function (id_stream, res) {
    var callback = function (model) {
        res.render("stream", {"model": model});
    };
    stream.start(id_stream, callback);
};

module.exports = router;
