'use strict';
require('locus')
function Session(date,ip,meta){
	this.date = date;
	this.ip = ip;
	this.meta = meta;
	this.router = '';
	this.get_router(this.ip);
}
Session.prototype.get_router = function(ip){
	var ar = this.ip.split('.');
	this.router = [ar[0],ar[1],ar[2]].join('.');
}

module.exports = {
	make: function(date,ip,meta){
		return new Session(date,ip,meta);
	}
}