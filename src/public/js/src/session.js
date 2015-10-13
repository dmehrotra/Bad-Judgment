function Session(session,previous){
	
	this.data = session;
	this.data.time_string = assignTimeString(session);
	this.data.previous_session_city = previous.city;
	this.data.previous_time_string = assignTimeString(previous);
	this.data.previous_session_date = previous.date;
	this.data.previous_home = previous.home;
	this.data.previous_work = previous.work;
	this.phrase = new Phrase(this.data);

}


var assignTimeString = function(session){			
	var am = session.date.split(' at ')[1].split('am').length > 1
	var time_string;
	if(am){
		var time = session.date.split(' at ')[1].split('am')[0];
		var hour = Math.floor(time.split(':')[0]);
		if ( hour >= 5 && hour <=9){
			time_string = 'very early';
		}else if( hour == 12){
			time_string = 'late';
		}else if( hour <= 4){
			time_string = 'very late';
		}else{
			time_string = 'early';
		}
	}else{
		var time = session.date.split(' at ')[1].split('pm')[0];
		var hour = Math.floor(time.split(':')[0]);
		if ( hour >= 1 && hour <= 3){
			time_string = 'afternoon';
		}else if( hour == 12){
			time_string = 'afternoon';
		}else if( hour > 3 && hour <= 5){
			time_string = 'afternoon';
		}else if( hour > 5 && hour <= 7){
			time_string = 'evening';
		}else {
			time_string = 'night';
		}
	}
	return time_string;
}

