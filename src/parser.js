'use strict';
require('locus');
var cheerio = require('cheerio')
var Session = require('./session.js');
var _ = require('underscore');
function Parser(data){
    this.rawData = data;
    var $ = cheerio.load(data);
    this.accountActivity = function(data){
    	var scrape = [];
    	if ($('h2').eq(2).html() == 'Account Activity'){
	    	$('h2').eq(2).next('ul').children().each(function(i, elem) {
	  			scrape.push($(elem).children().text());
			});	
    	}else{
    		$('h2').eq(1).next('ul').children().each(function(i, elem) {
	  			scrape.push($(elem).children().text());
			});	
    	}
 		return scrape;

    }(this.rawData);
}
Parser.prototype.clean = function(){
	var sessions = _.map(this.accountActivity, function(data){
		var date_ip = data.split('Browser')[0];
		var date = date_ip.split('Address: ')[0];
		var ip = date_ip.split('Address: ')[1];
		var meta = data.split('Browser')[1];
		return Session.make(date,ip,meta);
	});

	return sessions;
}
module.exports = {
	process:function(data){
		return new Parser(data);
	}
};