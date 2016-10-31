"use strict";
var express = require("express");
var router = express.Router();
var Stream = require("../controller/stream");
var colors = require("colors/safe");

router.get("/", function(req, res, next) {
    res.render("index", {title: "WebRTC"});
});

router.get("/stream/:id", function(req, res, next) {
    var id_stream = req.params.id;
    var stream = new Stream();
    stream.start(id_stream);
    res.render("stream", {"id_stream": id_stream});
});

router.get("/create", function (req, res, next) {
    var stream = new Stream();
    var url = stream.create(req);
    res.render("create", {url: url});
});

router.post("/start", function (req, res, next) {
    var id_stream = req.body.id_stream;
    var stream = new Stream();
    stream.start(id_stream);
    res.render("stream", {"id_stream": id_stream});
});

module.exports = router;
