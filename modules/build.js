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
            trave(dirStru, currentPath);
        });
    } else {
        throw new Error('the format of config.json must be an array or a json file path!'.red);
    }
}
