'use strict';
require('locus');
// Requirements and Variables
var express = require('express');
var fs = require('fs');
var Parser = require('./parser.js')
var multer = require('multer');
var upload = multer({ dest: './uploads/'});
var _ = require('underscore');
var Network = require('./network.js');
var Util = require('./util.js');
var request = require('request');
var app = express();
var account_sessions;
var networks = [];
var home = {"sessions":[1]};


// Setup


app.use('/static',express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.get('/', function(req,res){
	res.render("index",{ variable: 'FBDraw' || {} });
});

// On Upload
app.post('/upload', upload.single('fbdata'), function (req, res, next) {
  	fs.readFile(req.file.path,'utf8', function (err, data) {
	  if (err) throw err;
	  	account_sessions = Parser.process(data).clean(); 	
	  	// assign session a network
	  	_.each(account_sessions, function(session,key){
	  		var existing_network = _.find(networks,function(n){return n.router == session.router}); 
	  		if (existing_network){
	  			existing_network.addSession(session);
			}else{		
				var new_network = Network.make(session)
				networks.push(new_network);
	  		}
	  	});
	  
	  	// geolocate and assign properties

	  	_.each(networks, function(network){
	  		if (network.router.split(':').length > 3){
	  			var url = 'http://ip-api.com/json/'+ network.router
	  		}else{
	  			var url = 'http://ip-api.com/json/'+network.router+'.1'
	  		}
	  		request(url, function (error, response, body) {

			    if (!error && response.statusCode == 200) {
	
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
						var length = network.sessions.length; 
						_.each(network.sessions,function(s){
							s.frequency = length;
							s.updateWithFrequency(length);
							s.updateLocation(json.lat,json.lon,json.city,json.org);
						})
					}else{
			    		return false;
			    	}
				}
			});
		});
		var finish = function(callback){
			Util.help().updateHomeSessions(Util.help().getHome(networks));
			var not_home = _.where(networks, { "home":false})
			Util.help().updateWorkSessions(Util.help().getWork(not_home));
			// reverse session array and do update data based on network calculations
			Util.help().updateSessionData(account_sessions.reverse());
		// mass assignment of work home and previous sessions;
		}
		setTimeout(function(){res.json(account_sessions)}, 5000);

	});
	
});
  	

app.listen(app.get('port'),function(){
	console.log('front end site running on port 5000 baby');
});