module.exports = function(){
	var fs = require('fs');
	var childProccess = require('child_process');
	var build = require('../modules/build');

	var currentPath = process.cwd();
	var config = currentPath + "/config.json"; //用户自定义配置文件

	fs.exists(config, function(exists) {
	    if (!exists) {
	        config = require("../conf/config.json"); //默认配置文件;
	    }
	    // 构建目录结构
	    build(config, currentPath);

	    if(process.argv.slice(2)[1] == 'git') {
	        // 初始化 git 仓库
	        childProccess.exec('git init', function(err, stdout, stderr){
	            if (err) {
	                // console.error(err.stack);
	                // console.error('Error code:'+err.code);
	                throw new Error(err);
	                // return;
	            }
	            console.log(stdout);
	        });
	    }
	});
}