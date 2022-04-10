const { Domain } = require("domain");
var express = require("express");
var socket = require("socket.io");

var PORT = 6900;
var DOMAIN = "localhost";

var app = express();

app.get("/*", function(req, res) {
    res.send("test")
})

app.listen(PORT, function() {
    console.log(`Listening on ${DOMAIN}:6900`);
})