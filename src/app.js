'use strict';
require('locus');
// What you are finding is that he really has only been on 15 unique networks
var express = require('express');

var fs = require('fs');
var Parser = require('./parser.js')
var multer = require('multer');
var upload = multer({ dest: './uploads/'});
var _ = require('underscore');
var Network = require('./network.js')
var request = require('request');
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
	  	var account_sessions = Parser.process(data).clean(); 	
	  	var networks = [];
	  	_.each(account_sessions, function(session,key){
	  		var existing_network = _.find(networks,function(n){return n.router == session.router}); 
	  		if (existing_network){
	  			existing_network.addSession(session);
			}else{		
				var new_network = Network.make(session)
				networks.push(new_network);
	  		}
	  	});
	  	_.each(networks, function(network){
	  		request('http://ip-api.com/json/'+network.router, function (error, response, body) {
		    	console.log('trying') 
			    if (!error && response.statusCode == 200) {
			        console.log('got it');
			        var json;
			        try{
			        	var json = JSON.parse(body)
			        }catch(err){
			        	return false;
			        } 
				    if(json){
						network.isp = json.isp;
						network.lat = json.lat;
						network.lon = json.lon;
						network.org = json.org;
						network.city = json.city;
					}else{
			    		return false;
			    	}
				}
			});
		});
		eval(locus);
	});
});
  	

app.listen(3000,function(){
	console.log('front end site running on port 3000 baby');
});