module.exports = function(){
	var fs = require('fs'),
		childProccess = require('child_process'),
		build = require('../modules/build');

	var currentPath = process.cwd();
	var customConfigPath = currentPath + "/config.json";

	fs.exists(customConfigPath, function(exists) {
	    if (!exists) {
	        var config = require("../conf/config.json"); // default config.json
	    } else {
	    	var config = require(customConfigPath); // custom config.json
	    }

	    // build
	    build(config, currentPath);

	    // initailize git
	    if(process.argv.slice(2)[1] == 'git') {
	        childProccess.exec('git init', function(err, stdout, stderr){
	            if (err) {
	                console.error(err);
	                return;
	            }
	            console.log(stdout);
	        });
	    }
	});
}