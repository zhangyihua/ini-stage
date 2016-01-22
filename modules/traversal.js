module.exports = function(dirStru, currentPath) {
    var make = require('./make')();
    var traversal = function(dirStru, currentPath) {
        for (var i = 0; i < dirStru.length; i++) {
            if (dirStru[i] == '') {
                continue;
            };
            if (typeof dirStru[i] === "object" && !(dirStru[i] instanceof Array)) {
                make.makeMultiLevelPath.call(make, arguments, dirStru[i], currentPath);
            } else {
                make.makeSubPath(dirStru[i], currentPath);
            }
        }
    };

    traversal(dirStru, currentPath); // traversal the config and build
};
