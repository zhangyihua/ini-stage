module.exports = function (dirStru, currentPath) {
    var fs = require('fs');
    var __path = '';
    var tmpStr = '';

    // 创建文件或文件夹
    var make = function(__path, isFile) {
        if(fs.existsSync(__path)){
            tmpStr = __path.gray + " exists".red;
            console.log(tmpStr);
        }else if (isFile) { // 创建文件
            fs.open(__path, 'w+', 755, function(err, fd){
                if(err) {
                    console.log(err);
                } else {
                    tmpStr = __path.magenta + ' sucess';
                    console.log(tmpStr);
                    // console.log("open "+ __path + " file describe:" + fd);
                }
            });
        } else { // 创建目录
            fs.mkdirSync(__path);
            tmpStr = __path.green + ' sucess';
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
                // if(fs.existsSync(__path)){
                //     tmpStr = __path.gray + " exists".red;
                //     console.log(tmpStr);
                // }else{
                //     fs.mkdirSync(__path);
                //     tmpStr = __path.green + ' sucess';
                //     console.log(tmpStr);
                // }

                make(__path, isFile);

                // traversal(children, __path);
                arguments.callee(children, __path);
            }
        } else {
            var _item = dirStru[i];
            var isFile = _item.charAt(0) == '#' ? true : false;

            if(isFile) {
                _item = _item.length > 2 ? _item.substr(1, _item.length-1) : "somefile"+parseInt(Math.random()*10000);
            }
            __path = currentPath + '/' + _item;
            // if(fs.existsSync(__path)){
            //     tmpStr = __path.gray+" exists".red;
            //     console.log(tmpStr);
            // }else{
            //     fs.mkdirSync(__path);
            //     tmpStr = __path.green + ' sucess';
            //     console.log(tmpStr);
            // }
            make(__path, isFile);
        }
    }
};

// module.exports = traversal;