module.exports = function (dirStru, currentPath) {
    var fs = require('fs');
    var __path = '';
    var tmpStr = '';

    // make a file or folder
    var make = function(__path, isFile) {
        if(fs.existsSync(__path)){
            tmpStr = __path.gray + " exists".red;
            console.log(tmpStr);
        }else if (isFile) { // make a file
            fs.open(__path, 'w+', 755, function(err, fd){
                if(err) {
                    console.log(err);
                } else {
                    tmpStr = "Create a file:" + __path.magenta + ' sucessfully';
                    console.log(tmpStr);
                }
            });
        } else { // make a folder
            fs.mkdirSync(__path);
            tmpStr = "Create a folder:" + __path.green + ' sucessfully';
            console.log(tmpStr);
        }
    }

    for (var i = 0; i < dirStru.length; i++) {
        if (dirStru[i] == '') {
            continue;
        };
        if (typeof dirStru[i] === "object") {
            for (var _item in dirStru[i]) {
                var children = dirStru[i][_item];
                var isFile = _item.charAt(0) == '#' ? true : false;

                if(isFile) {
                    _item = _item.length>2 ? _item.substr(1, _item.length-1) : "somefile"+parseInt(Math.random()*10000);
                }
                __path = currentPath + '/' + _item;
                make(__path, isFile);
                arguments.callee(children, __path);
            }
        } else {
            var _item = dirStru[i];
            var isFile = _item.charAt(0) == '#' ? true : false;

            if(isFile) {
                _item = _item.length > 2 ? _item.substr(1, _item.length-1) : "somefile"+parseInt(Math.random()*10000);
            }
            __path = currentPath + '/' + _item;
            make(__path, isFile);
        }
    }
};
