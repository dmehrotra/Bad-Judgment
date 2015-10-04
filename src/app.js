'use strict';
require('locus');
var express = require('express'),
    http = require('http');

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
  // req.file is the `avatar` file
  eval(locus);
  // req.body will hold the text fields, if there were any
})

app.listen(3000,function(){
	console.log('front end site running on port 3000 baby');
});