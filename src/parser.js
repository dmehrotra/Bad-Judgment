'use strict';
require('locus');
var cheerio = require('cheerio')
var _ = require('underscore');
function Parser(data){
    this.rawData = data;
    var $ = cheerio.load(data);
    this.accountActivity = function(data){
    	var scrape = [];
    	$('h2').eq(1).next('ul').children().each(function(i, elem) {
  			scrape.push($(elem).children().text());
		});
 		return scrape;
    }(this.rawData);
}
Parser.prototype.clean = function(){
	var logs = _.map(this.accountActivity, function(data){
		var date_ip = data.split('Browser')[0];
		var date = date_ip.split('Address: ')[0];
		var ip = date_ip.split('Address: ')[1];
		var meta = data.split('Browser')[1];
		return Log.make(date,ip,meta);
		eval(locus);
	});
	return logs;
}
module.exports = {
	process:function(data){
		return new Parser(data);
	}
};