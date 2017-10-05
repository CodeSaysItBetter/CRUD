/* global require, module,  __dirname */
/* jslint node: true */
/* jshint esversion: 6 */
"use strict";

let express = require("express");
let app = express();

// Mongo Database
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/usersSchema');

const path = require('path');

//Body Parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Static Folder
app.use(express.static(__dirname + "/public/dist/"));


//Catch all Routes
app.all("*", (req, res, next) =>{
	res.sendFile(path.resolve("./public/dist/index.html"));
});