function Sentence(data){
	this.data = data;
	this.advertisement = '';
}
Sentence.prototype.hungover = function(){
	var str = '';
	str = str + "It's " + this.data.data.date.replace('EDTIP', '')+", "+this.data.data.time_string+' considering how late you were out last night.';	
	str = str + " You were getting drunk in "+this.data.data.city + ' and now are paying the price.  You feel like said something stupid to the bar tender, but you cant remember what.'
	str = str + " You hope you weren't tagged in any of their photographs."
	this.advertisement = 'hangover';
	return str;
};
Sentence.prototype.cantSleep = function(){
	var str = ''
	if(this.data.data.home){
		str = str + "It's late, you should be asleep but you check me one more time just to be sure. The date is" + this.data.data.date.replace('EDTIP', '') + '.';
		this.advertisement = 'sleep aid';
	}else{
		str = str + "You are out late with your friends in " + this.data.data.city + ".  You were having a great time until your friend's left." 
		str = str +" Now you are at the bar alone pretending to be reading a work email while actually checking me for updates about your ex." ;
		this.advertisement = 'okay cupid';
	}
	return str;
}
Sentence.prototype.frequentChecker = function(){
	
	var str = "You checked me " + this.data.time_since.hours +" hours and " + this.data.time_since.minutes + " ago."
	str = str + " A lot has changed, and I can't wait for you to check me again."
	
	this.advertisement = 'frequent checker';
	return str;
}	
Sentence.prototype.work = function(){
	var str = "You are bored at work on " + this.data.data.date.replace('EDTIP', '') + ".";
	str = str + " You resize your a new browser window, so that it is small enough not to be seen by those around you.";
	str = str + "As you start typing 'faceb', you think to yourself, 'tomorrow I am going to look for a new job'.";
	this.advertisement = 'linkedin';
	return str;
}
Sentence.prototype.workLate = function(){
	var str = "You at work late on " + this.data.data.date.replace('EDTIP', '') + ".";
	str = str + " You are hungry and tired. Your boss just doesn't pay enough attention to all the work that you are putting in."
	str = str + " You worked hard for a promotion, but you just can't help but feel like your life isn't going anywhere."
	str = str + "As you start typing 'faceb', you think to yourself, 'tomorrow I am going to look for a new job'.";
	this.advertisement = 'linkedin';
	return str;
}
Sentence.prototype.wakeup = function(place){
	var str = '';
	if (place){
		str = str + " On " + this.data.data.date.replace('EDTIP', '')+ ", you wake up comfortable at home. You hit snooze after checking me for updates.";
		this.advertisement = 'cereal';
	}else{
		str = str + " On" + this.data.data.date.replace('EDTIP', '') + " you wake up in a bed that isn't yours in " +place+ ".";
		if (this.data.data.frequency_string == 'once'){
			str = str + " Another one night stand.  You are an adult, maybe it's time you settle down."
			this.advertisement = 'condoms';
		}		 
	}
	return str;
}
Sentence.prototype.hasMoved = function(){
	var str = '';
	if (this.data.data.previous_home && this.data.data.work){
		str = str + ' You get to work on '+ this.data.data.date.replace('EDTIP', '') + '.';
		str = str + ' Today is the day you are going to march right up to your boss and tell her that you quit. But first you should check me for updates.'
		this.advertisement = 'car';
	}else if (this.data.data.previous_work && this.data.data.home){
		str = str + ' You come home from work on '+ this.data.data.date.replace('EDTIP', '') + '.';
		str = str + ' Another day that felt like the last - you might as well check me to see some updates.';
		this.advertisement = 'car';
	}else{
		str = str + "It's " + this.data.data.date.replace('EDTIP', '')+", in the "+ this.data.time_since.hours +" hours and " +this.data.time_since.minutes + " minutes that you were away from me you have moved from " + this.data.data.previous_session_city + " to " + this.data.data.city+'.';
	}
	return str;
}
Sentence.prototype.defaultSentence = function(){
	var str = 'default';
	return str;
}