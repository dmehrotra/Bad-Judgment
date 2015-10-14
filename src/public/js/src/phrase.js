function Phrase(data){
	this.data = data;
	this.early = ((this.data.time_string == 'very early' || this.data.time_string == 'early') ? true : false);
	this.out_late = this.early && this.data.previous_time_string == 'very late' && !this.data.home;
	this.time_since = parseDifference(this.data.date, this.data.previous_session_date)
	this.first_session = this.out_late || this.early && this.time_since.hours > 7;
	this.has_moved = this.data.city != this.data.previous_session_city;
	this.sentence = '';
	this.session_date = Date.parse(this.data.date.replace(' at','').replace('EDTIP', ''));

	buildSentence(this);


}
var buildSentence = function(data){
// frequent checker and at work
//cool side of the pillow
// not home not at work in the afternoon

	if (data.early && data.out_late && data.first_session){
		data.sentence = new Sentence(data).hungover();		
	}else if (data.data.time_string == 'very late'){
		data.sentence = new Sentence(data).cantSleep();
	}else if(data.first_session){
		if (data.data.home){
			data.sentence = new Sentence(data).wakeup(true);
		}else{
			data.sentence = new Sentence(data).wakeup(data.data.city);
		}
	}else if(data.has_moved){
		data.sentence = new Sentence(data).hasMoved();
	}else if(data.data.work == true){
		data.sentence = new Sentence(data).work();
	}else if(data.data.time_string == 'evening' && data.data.work == true){
		data.sentence = new Sentence(data).workLate();
	}else if(data.time_since.hours <= 1 && !data.has_moved){
		data.sentence = new Sentence(data).frequentChecker();	
	}else if(data.early && !data.has_moved){
		data.sentence = new Sentence(data).earlyNotMoved();	
	}
	else{
		data.sentence = new Sentence(data).defaultSentence();
	}
}
var parseDifference = function(current,previous){
	if(current && previous){
		var c = Date.parse(current.replace(' at','').replace('EDTIP', ''));
		var p = Date.parse(previous.replace(' at','').replace('EDTIP', ''));
		return secondsToString(c-p);
	}else{
		return 'not available';
	}
		
}
function secondsToString(ms){
var seconds = ms/1000;
var numyears = Math.floor(seconds / 31536000);
var numdays = Math.floor((seconds % 31536000) / 86400); 
var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
return { "days": numdays,
		 "hours": numhours,
		 "minutes": numminutes
		}
}