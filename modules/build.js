module.exports = function(config, currentPath) {
    var fs = require('fs');
    var colors = require('colors');
    var trave = require('./traversal');

    var str = "build in " + currentPath + ":\n";
    console.log(str);

    if(config instanceof Array){
        trave(config, currentPath);
    } else if(typeof config === 'string'){
        fs.readFile(config, function(err, data) {
            if (err) {
                console.log(err);
                return;
            }
            var dirStru = null;
            var newFilePath = '';

            dirStru = JSON.parse(data.toString());
            if(dirStru instanceof Array) {
                trave(dirStru, currentPath);
            } else {
                var errorMsg = 'the format of config.json must be an array'.red;
                console.log(errorMsg);
                throw new Error(errorMsg);
            }
        });
    } else {
        var errorMsg = 'the config parameter must be an array or a json file path'.red;
        console.log(errorMsg);
        throw new Error(errorMsg);
    }
}
