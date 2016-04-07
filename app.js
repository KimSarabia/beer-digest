'use strict';

var express = require('express'),
  app = express();
  require('dotenv').load();
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var bcrypt = require('bcryptjs');
var logger = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var chalk = require('chalk');
var error = chalk.bold.red;

var PORT = process.env.PORT || 3000;
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/beerapp';

if(!process.env.JWT_SECRET) {
  console.error(error(`ERROR:  Missing process.env.JWT_SECRET.
    You must set a JWT secret as an environment variable.`));
}

mongoose.connect(mongoUrl, function(err){
  if(err) return console.error(`Error connecting to Mongodb: ${err}`);
  console.log(`Connected to MongoDB: ${mongoUrl}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', require('./routes/index'));
app.use('/beers', require('./routes/beers'));


app.use(function(req, res){
  res.status(404).render('404');
});

var server = http.createServer(app);

server.listen(PORT);
server.on('error', function(err) {
  console.error(err);
});
server.on('listening', function(){
  console.log(`Listening on port ${PORT}`);
});
