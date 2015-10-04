'use strict';
require('locus');

var express = require('express');
var http = require('http');
var fs = require('fs');
var Parser = require('./parser.js')
var multer = require('multer');
var upload = multer({ dest: './uploads/'});

var app = express();

app.use('/static',express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.get('/', function(req,res){
	res.render("index",{ variable: 'FBDraw' || {} });
});

app.post('/upload', upload.single('fbdata'), function (req, res, next) {
  fs.readFile(req.file.path,'utf8', function (err, data) {
  if (err) throw err;
  	var account_activity = Parser.process(data).clean();

  });
});

app.listen(3000,function(){
	console.log('front end site running on port 3000 baby');
});