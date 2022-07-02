'use strict'
//모듈
var express = require('express');
const bodyParser = require('body-parser');
var app = express();

//라우터
const home = require('./src/routes/home');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :true}));

app.use('/',home);
module.exports = app;