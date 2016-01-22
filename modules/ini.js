module.exports = function(){
	var fs = require('fs'),
		childProccess = require('child_process'),
		build = require('../modules/build');

	var currentPath = process.cwd();
	var config = currentPath + "/config.json"; // custom config.json

	fs.exists(config, function(exists) {
	    if (!exists) {
	        config = require("../conf/config.json"); // default config.json
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