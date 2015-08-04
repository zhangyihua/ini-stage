function traversal(dirStru, currentPath) {
    var fs = require('fs');
    var __path = '';
    var tmpStr = '';
    for (var i = 0; i < dirStru.length; i++) {
        if (typeof dirStru[i] === "object") {
            for (var _item in dirStru[i]) {
                var children = dirStru[i][_item];
            }
            __path = currentPath + '/' + _item;
            if(fs.existsSync(__path)){
                tmpStr = __path.gray + " exists".red;
                console.log(tmpStr);
            }else{
                fs.mkdirSync(__path);
                tmpStr = __path.green + ' sucess';
                console.log(tmpStr);
            }
            traversal(children, __path);
        } else {
            __path = currentPath + '/' + dirStru[i];
            if(fs.existsSync(__path)){
                tmpStr = __path.gray+" exists".red;
                console.log(tmpStr);
            }else{
                fs.mkdirSync(__path);
                tmpStr = __path.green + ' sucess';
                console.log(tmpStr);
            }
        }
    }
};

module.exports = traversal;