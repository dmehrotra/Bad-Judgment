function Sentence(data){
	this.data = data;
	this.advertisement = '';
}
Sentence.prototype.hungover = function(){
	var str = '';
	str = str + "It's " + this.data.data.date.replace('EDTIP', '')+", you are up "+this.data.data.time_string+' considering how late you were out last night. ';	
	str = str + this.data.data.city + ' must have been fun, but I bet you are hung over.  Why dont you tell me whats on your mind?'; 
	this.advertisement = 'seltzer';
	return str;
};
Sentence.prototype.cantSleep = function(){
	var str = '';
	if(this.data.data.home){
		// more
		var ar = [
			"It's late, you should be asleep but you check me one more time just to be sure. The date is " + this.data.data.date.replace('EDTIP', '') + ' and you are at home in '+ this.data.data.city + '.',
		 	"You had that dream again and now you are awake. It's " + this.data.data.date.replace('EDTIP', '') + ' and you are checking me to forget.',
		 	"You are at home and cant sleep. The date is " + this.data.data.date.replace('EDTIP', '') +  " and you are looking for picture of yourself when you were young, again."
		 	]
		
		this.advertisement = 'sleep aid';

		return ar[Math.floor(Math.random() * ar.length)];
	}else{
		var ar = [
		"You were having a great time with your friends in " + this.data.data.city + " on  "+ this.data.data.date.replace('EDTIP', '') +  " but they all went home. Now you are at the bar alone pretending to be reading a work email while actually checking me for no particular reason.",
		"You are in " + this.data.data.city + " and it's  "+ this.data.data.date.replace('EDTIP', '') +  ". You don't know how you got here and you wonder why you are on facebook. Tell me what's on your mind.",
		"It's  "+ this.data.data.date.replace('EDTIP', '') +  ". You had that dream again and when you woke up your shoes were on. You had logged in to facebook from " + this.data.data.city + ", not the same place you fell asleep."
		]
		this.advertisement = 'okay cupid';
		return ar[Math.floor(Math.random() * ar.length)];
	}
	
}
Sentence.prototype.frequentChecker = function(){
	
	var ar = [
	"You checked me " + this.data.time_since.hours +" hours and " + this.data.time_since.minutes + " minutes ago. A lot has changed, and I can't wait for you to check me again.",
	"You are still in " + this.data.data.city + ". As you closed your facebook window "+ this.data.time_since.hours +" hours and " + this.data.time_since.minutes + " minutes ago you thought you saw a photo of yourself. You log back in and can't find the picture.",
	"When you last checked me, "+ this.data.time_since.hours +" hours and " + this.data.time_since.minutes + " minutes ago, you noticed that someone you used to know from high school passed away.  You log back in to find out how."
	]
	
	this.advertisement = 'frequent checker';
	return ar[Math.floor(Math.random() * ar.length)];

}	
Sentence.prototype.work = function(){
	

	var ar = [
	"You are bored at work on " + this.data.data.date.replace('EDTIP', '') + ". You resize a new browser window so that it is small enough not to be seen by those around you. As you start typing 'faceb', you think to yourself, 'tomorrow I am going to look for a new job'.",
	"On "+this.data.data.date.replace('EDTIP', '') +" you look your boss up on facebook.  In her profile picture she is holding a cocktail, but you could have sworn she said she was sober.",
	"On your work computer "+this.data.data.date.replace('EDTIP', '') +  ", you accidently return to facebook after typing f into google chrome.",
	"You are at work and you want to quit. It's "+this.data.data.date.replace('EDTIP', '') +  ", you march over to your boss and ask if she want's to chat over a drink after work.  She says she is sober.  You check me for updates and find out that the identical twin of someone you used to know from high school has passed away."
	]
	this.advertisement = 'linkedin';
	return ar[Math.floor(Math.random() * ar.length)];

}
Sentence.prototype.workLate = function(){
	var ar =[
	"You checked me " + this.data.time_since.hours + "ago. It's " + this.data.data.date.replace('EDTIP', '') + " and you are literally watching the hands of the clock.  Your eyes are starting to blur and it seems like the hour and minute hands are crushing time between their pincers. You think to yourself 'what am I even doing'.  You log on to facebook to find out.",
	"You at work late on " + this.data.data.date.replace('EDTIP', '') + ". You are hungry and tired. Your boss just doesn't pay enough attention to all the work that you are putting in and you can't help but feel like your life isn't going anywhere. As you start typing 'faceb', you think to yourself, 'tomorrow I am going to look for a new job'.",
	"You are at work late again on " + this.data.data.date.replace('EDTIP', '') +". You hear somone shuffling around in the hallway.  When you peer over your partition to see who it is, you find your boss sleeping on the floor. You log into facebook and consider removing every photo of yourself"]
	this.advertisement = 'linkedin';
	return ar[Math.floor(Math.random() * ar.length)];
}
Sentence.prototype.wakeup = function(place){
	var str = '';
	if (place){
		str = str + " On " + this.data.data.date.replace('EDTIP', '')+ ", you wake up and roll over onto the cool side of the pillow to check me for updates.";
		this.advertisement = 'cereal';
	}else{
		str = str + " On" + this.data.data.date.replace('EDTIP', '') + " you wake up in a bed that isn't yours in " +place+ ".";
		if (this.data.data.frequency_string == 'once'){
			str = str + " Another one night stand. You are conflicted as to whether you update your status or not."
			this.advertisement = 'condoms';
		}		 
	}
	return str;
}
Sentence.prototype.checkingElsewhere = function(){

		var ar = [
		"The stranger you made eye contact with on " + this.data.data.date.replace('EDTIP', '') + " just friended you on facebook.  You log in and find out that it was an old friend from highschool.",
		"You discretely log on to facebook after you meet someone who shares the same name as the friend of yours who passed away - or was it his twin. It's" + this.data.data.date.replace('EDTIP', '') + " and you should be sending that email your boss want's sent by EOD.",
		"You are in " + this.data.data.city + ", you last logged in from here, " + this.data.time_since.hours +" hours and " +this.data.time_since.minutes + " minutes ago. You've come here " + this.data.data.frequency + " times this year to reflect. But you had that dream again last night, and you are wondering if you should tell someone. You log in. Why don't you tell me whats on your mind.",
		"You are in " + this.data.data.city + ", you last logged in from here, " + this.data.time_since.hours +" hours and " +this.data.time_since.minutes + " minutes ago. You check your facebook because you can't remember if your boss was drunk at the holiday party or not.  It turns out that you can't tell from the photos."
		]
		return ar[Math.floor(Math.random() * ar.length)]; 
}
Sentence.prototype.hasMoved = function(){
	var str = '';
	if (this.data.data.previous_home && this.data.data.work){
		str = str + ' You get to work on '+ this.data.data.date.replace('EDTIP', '') + '.';
		str = str + ' Today is the day you are going to march right up to your boss and tell her that you quit. But first you should check me for updates.'
		this.advertisement = 'car';
	}else if (this.data.data.previous_work && this.data.data.home){
		str = str + ' You come home from work on '+ this.data.data.date.replace('EDTIP', '') + '.';
		str = str + ' Every day is starting to feel the same- you check me to see if you forgot to wish someone a happy birthday.';
		this.advertisement = 'car';
	}else{
		str = str + "It's " + this.data.data.date.replace('EDTIP', '')+", in the "+ this.data.time_since.hours +" hours and " +this.data.time_since.minutes + " minutes that you were away from me you have moved from " + this.data.data.previous_session_city + " to " + this.data.data.city + '.';
	}
	return str;
}
Sentence.prototype.earlyNotMoved = function(){
	var ar =[ 
		"You are still in bed in " + this.data.data.previous_session_city + ". It's been" + this.data.time_since.hours + " hours and " +this.data.time_since.minutes + " minutes, since I last heard from you. What's on your mind?",
		this.data.data.date.replace('EDTIP', '') + ", you checked me "  + this.data.time_since.hours + " hours and " +this.data.time_since.minutes + " minutes ago.",
		"After you checked me "  + this.data.time_since.hours + " hours and " +this.data.time_since.minutes + " minutes ago, you fell asleep while reaching out to an old friend named Molly via Messanger.  You log in to me and discover that you don't have a friend named Molly."]
		
		return ar[Math.floor(Math.random() * ar.length)];
}
Sentence.prototype.defaultSentence = function(){
	var ar=[
		"The stranger you made eye contact with on " + this.data.data.date.replace('EDTIP', '') + " just friended you on facebook.  You log in and find out that it was an old friend from highschool.",
		"You discretely log on to facebook after you meet someone who shares the same name as the friend of yours who passed away - or was it his twin. It's" + this.data.data.date.replace('EDTIP', '') + " and you should be sending that email your boss want's sent by EOD.",
		this.data.data.date.replace('EDTIP', '') + " in " + this.data.data.city  + " you see your boss leaving a bar.  Didn't she say she was sober? You ask a coworker through Messanger.",
		]
	return ar[Math.floor(Math.random() * ar.length)];
}