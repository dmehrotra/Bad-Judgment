'use strict';
require('locus')
var _ = require('underscore');
function Network(session){
	this.sessions = [session]; 
	this.router = session.router;
	this.isp = '';
	this.lat = '';
	this.lon = '';
	this.org = '';

}

Network.prototype.addSession = function(session){
	this.sessions.push(session);
}
Network.prototype.assign_location = function(lat,lng){
	this.latitude = lat;
	this.longitude = lng;
}
Network.prototype.frequency = function(){
	return this.sessions.count
}


module.exports = {
	make: function(session){
		return new Network(session);
	}
}