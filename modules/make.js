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
                if (!util.pathExists(path)) {
                    return this.createFile(path);
                }
            } else {
                var path = currentPath + '/' + item;
                if (!util.pathExists(path)) {
                    return this.createDir(path);
                }
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
            try {
                fs.openSync(path, 'w+', 755);
                var logStr = path.magenta + conf.msg.SUCCESS_TIPS;
                console.log(logStr);
                return true;
            } catch(exception) {
                console.warn(exception);
                return false;
            }
        },

        createDir: function(path) {
            try {
                fs.mkdirSync(path);
                var logStr = path.green + conf.msg.SUCCESS_TIPS;
                console.log(logStr);
                return true;
            } catch(exception) {
                console.warn(exception);
                return false;
            }
        }
    }
}
