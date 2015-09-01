var request = require('request');
var config = require('./config');
var app = require('express')();
var TOKEN = null;



function callHue() {
	var data = {
	    'on': false
	};

	request({
		url: 'http://' + config.hue.endpoint + config.hue.username + '/lights/2/state',
		method: 'PUT',
		json: data
	}, function(err, test, test2) {
		if (!!err) {
			return console.log('ERROR: Could not connect to hue');
		}
	});

	
}

module.exports = {
  	call: callHue
};
