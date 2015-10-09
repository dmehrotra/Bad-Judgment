'use strict';
require('locus')
function Session(date,ip,meta){
	this.date = date;
	this.ip = ip;
	this.meta = meta;
	this.router = '';
	this.lat = '';
	this.lon = '';   
	this.get_router(this.ip);
}
Session.prototype.get_router = function(ip){
	if (this.ip.split(':').length > 3){
		this.router = this.ip;
	}else{
		var ar = this.ip.split('.');
		this.router = [ar[0],ar[1],ar[2]].join('.');
	}
}
Session.prototype.update = function(lat,lon){
	this.lat = lat;
	this.lon = lon;
}

module.exports = {
	make: function(date,ip,meta){
		return new Session(date,ip,meta);
	}
}