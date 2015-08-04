#!/usr/bin/env node

var program = require('commander');

program
    .version('1.0.0')
    .option('-s, --start', 'Start initialize')
    .parse(process.argv);

if (program.start) {

    var path = require('path');
    var fs = require('fs');

    var traversal = require('../modules/traversal');
    var build = require('../modules/build');
    var currentPath = process.cwd();
    var config = currentPath + "/config.json";
    var configDefault = require("../conf/config.json");


    fs.exists(config, function(exists) {
        if (!exists) {
            config = configDefault;
        }
        build(config, currentPath, traversal);
    });

}
