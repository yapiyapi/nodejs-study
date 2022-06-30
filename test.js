//모듈
var express = require('express');
var app = express();

//라우터
const home = require('./routes/home');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/',home);

module.exports = app;