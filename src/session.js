'use strict';
require('locus')
function Session(date,ip,meta){
	this.date = date;
	this.ip = ip;
	this.meta = meta;
	this.router = '';
	this.lat = '';
	this.lon = '';  
	this.first_session_of_day = false; 
	this.last_session_of_day = false;
	this.get_router(this.ip);
	this.phone = false;
	this.home = false;
	this.work = false;
	this.frequency = 0;
	this.frequency_string = 'infrequent';
	this.time_string = '';
	this.city = '';
	this.org = '';
}
Session.prototype.get_router = function(ip){
	if (this.ip.split(':').length > 3){
		this.router = this.ip;
	}else{
		var ar = this.ip.split('.');
		this.router = [ar[0],ar[1],ar[2]].join('.');
	}
}
Session.prototype.updateLocation = function(lat,lon,city,org){
	this.lat = lat;
	this.lon = lon;
	this.city = city;
	this.org = org;
}
Session.prototype.updateWithFrequency = function(frequency){
	if (frequency == 1 ){
		this.frequency_string = 'once';
	}
	if(frequency > 1 && frequency <= 4){
		this.frequency_string = 'rarely';
	}
	if (frequency > 5 <= 10){
		this.frequency_string = 'a few times';
	}
	if(frequency > 10){
		this.frequency_string = 'often';
	}
}

module.exports = {
	make: function(date,ip,meta){
		return new Session(date,ip,meta);
	}
}