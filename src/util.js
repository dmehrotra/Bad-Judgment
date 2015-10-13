'use strict';
require('locus')
var _ = require('underscore');
function Util(){
	
}
Util.prototype.getWork = function(not_home_networks){
	var work = {sessions:[0]};
	_.each(not_home_networks, function(n){
		if (n.sessions.length > work.sessions.length){
			work = n;
		}
	})
	work.work = true;
	return work;
}
Util.prototype.getHome = function(networks){
	var home = {sessions:[0]};
	_.each(networks, function(network){
  		if (network.sessions.length > home.sessions.length){
  			home = network;
  		}
	});
	home.home = true;
	return home;
}
Util.prototype.updateHomeSessions = function(home){
	_.each(home.sessions, function(s){
		s.home = true;
	});
}
Util.prototype.updateWorkSessions = function(work){
	_.each(work.sessions, function(s){
		s.work = true;
	});
}


module.exports = {
	help: function(){
		return new Util();
	}
}