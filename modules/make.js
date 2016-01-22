module.exports = function() {
	var fs = require('fs'),
        colors = require('colors'),
		conf = require('./conf'),
		util = require('./util')();

    return {
        makeSubPath: function(item, currentPath) {
            var isFile = util.checkIsFile(item);
            if (isFile) {
                var fileName = util.getFileName(item);
                var path = currentPath + '/' + fileName;
                !util.pathExists(path) && this.createFile(path);
            } else {
                var path = currentPath + '/' + item;
                !util.pathExists(path) && this.createDir(path);
            }
        },

        // make the multistage subdirectories
        makeMultiLevelPath: function(parentArguments, dirStru, currentPath) {
            for (var subDirName in dirStru) {
                var subDirValue = dirStru[subDirName];
                var subDirPath = currentPath + '/' + subDirName;

                if (!util.pathExists(subDirPath)) {
                    this.createDir(subDirPath);
                }

                if (parentArguments) {
                    parentArguments.callee(subDirValue, subDirPath);
                }
            }
        },

        createFile: function(path) {
            fs.open(path, 'w+', 755, function(err) {
                if (err) {
                    console.log(err);
                    return;
                }

                var logStr = path.magenta + conf.msg.SUCCESS_TIPS;
                console.log(logStr);
            });
        },

        createDir: function(path) {
            fs.mkdirSync(path);
            var logStr = path.green + conf.msg.SUCCESS_TIPS;
            console.log(logStr);
        }
    }
}
