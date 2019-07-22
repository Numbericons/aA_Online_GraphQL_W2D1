const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Big Fing World"));

app.use(bodyParser.json());

app.listen(5000, () => console.log("Server is running on port 5000"));
