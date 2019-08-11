const express = require("express");
const app = express();

const data = require('../data/hotels.json');

app.listen(3000, () => {
    console.log("Server running on port 3000...");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/hotels", (req, res) => {
    res.json(data);
});