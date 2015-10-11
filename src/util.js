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
Util.prototype.updateSessionData = function(sessions){
	var sess = sessions;
	for(var i = 0; i <= sessions.length + 1; i++ ){
		sess = sessions[i];
		if (sessions[i-1] && sessions[i]){
			sessions[i].last_session = sessions[i-1];
			var am = sess.date.split(' at ')[1].split('am').length > 1
			if(am){
				var time = sess.date.split(' at ')[1].split('am')[0];
				var hour = Math.floor(time.split(':')[0]);
				if ( hour >= 6 && hour <=9){
					sess.time_string = 'very early';
				}else if( hour == 12){
					sess.time_string = 'late';
				}else if( hour < 4){
					sess.time_string = 'very late';
				}else{
					sess.time_string = 'early';
				}
			}else{
				var time = sess.date.split(' at ')[1].split('pm')[0];
				var hour = Math.floor(time.split(':')[0]);
				if ( hour >= 1 && hour <= 3){
					sess.time_string = 'early afternoon';
				}else if( hour == 12){
					sess.time_string = 'afternoon';
				}else if( hour > 3 && hour <= 5){
					sess.time_string = 'afternoon';
				}else if( hour > 5 && hour <= 7){
					sess.time_string = 'evening';
				}else {
					sess.time_string = 'night';
				}
			}
		}
	}
}

module.exports = {
	help: function(){
		return new Util();
	}
}