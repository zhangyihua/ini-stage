module.exports = function(config, currentPath) {
    var fs = require('fs'),
        colors = require('colors'),
        traversalConfig = require('./traversal'),
        conf = require('./conf');

    console.log(conf.msg.START_BUILD);

    if(config instanceof Array){
        traversalConfig(config, currentPath);
    }else {
        throw new Error(conf.msg.CONFIG_ERROR);
    }
}
