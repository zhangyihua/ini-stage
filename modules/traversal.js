module.exports = function(dirStru, currentPath) {
    var fs = require('fs'),
        conf = require('./conf');

    traversal(dirStru, currentPath);

    function traversal(dirStru, currentPath) {
        for (var i = 0; i < dirStru.length; i++) {
            if (dirStru[i] == '') {
                continue;
            };
            if (typeof dirStru[i] === "object" && !(dirStru[i] instanceof Array)) {
                makeMultiLevelPath.call(this, arguments, dirStru[i]);
            } else {
                makeSubPath(dirStru[i], currentPath);
            }
        }
    }

    function checkIsFile(item) {
        return /^\#/.test(item);
    }

    function makeSubPath(item, currentPath) {
        var isFile = checkIsFile(item);
        if (isFile) {
            var fileName = getFileName(item);
            var path = currentPath + '/' + fileName;
            !pathExists(path) && createFile(path);
        } else {
            var path = currentPath + '/' + item;
            !pathExists(path) && createDir(path);
        }
    }


    function makeMultiLevelPath(parentArguments, dirStru) {
        for (var subDirName in dirStru) {
            var subDirValue = dirStru[subDirName];
            var subDirPath = currentPath + '/' + subDirName;

            if (!pathExists(subDirPath)) {
                createDir(subDirPath);
            }

            if (parentArguments) {
                parentArguments.callee(subDirValue, subDirPath);
            }
        }
    }

    function getFileName(fileName) {
       return fileName.length > 2 ? fileName.substr(1, fileName.length - 1) : conf.DEF_FILE_NAME + parseInt(Math.random() * 10000);
    }

    function pathExists(path) {
        if (fs.existsSync(path)) {
            var logStr = path.gray + " exists".red;
            console.log(logStr);
            return true;
        }
        return false;
    }

    function createFile(path) {
        fs.open(path, 'w+', 755, function(err) {
            if (err) {
                console.log(err);
                return;
            }

            var logStr = path.magenta + conf.msg.SUCCESS_TIPS;
            console.log(logStr);
        });
    }

    function createDir(path) {
        fs.mkdirSync(path);
        var logStr = path.green + conf.msg.SUCCESS_TIPS;
        console.log(logStr);
        
        // fs.mkdir(path, 755, function(err) {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }

        //     var logStr = path.green + conf.msg.SUCCESS_TIPS;
        //     console.log(logStr);
        // });
    }
};
