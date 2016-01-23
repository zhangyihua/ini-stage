// ini-stage unit test
var ini = require('../modules/ini'),
    build = require('../modules/build'),
    make = require('../modules/make')(),
    traversal = require('../modules/traversal'),
    util = require('../modules/util')(),
    expect = require('chai').expect;

var currentPath = process.cwd() + "/test/project/";
var config = require('./config');

// ----------------------------------------------
// describes

// module ini test
// describe("Test ini", function(){
// 	it("ini not throw error", function() {
// 		expect(ini).to.not.throw(Error);
// 	})
// });


// module build test
describe("Test build", function() {
    it("build not throw error", function() {
        var buildTest = function() {
            build(config, currentPath)
        }

        expect(buildTest).to.not.throw(Error);
    })
});

// module make test
describe("Test make", function() {
    it("make.makeSubPath success to create a file", function() {
        expect(make.makeSubPath("#tes_file", currentPath)).to.equal(true);
    });

    it("make.makeSubPath success to create a folder", function() {
        expect(make.makeSubPath("test_folder", currentPath)).to.equal(true);
    });
});

// module util test
describe("Test util", function() {
    // It's a file
    it("util.checkIs File: It\'s a file which start with #", function() {
        expect(util.checkIsFile("#filename")).to.be.true;
    });

    // It's not a file
    it("util.checkIs File: It\'s not a file which not start with #", function() {
        expect(util.checkIsFile("filename")).not.to.be.true;
    });

    // success to get a entity file
    it("util.getFileName: success to get a filename", function() {
        expect(util.getFileName("#filename")).to.be.ok;
    });


    // pathExists
    it("util.pathExists: the path not exists", function() {
        expect(util.pathExists(currentPath + "/pathTest")).not.to.be.true;
    })
});


// module traversal test
describe("Test traversal", function() {
    it("traversal build ok", function() {
        var dirStru = [
            "traversal_test", 
            {
                "mrd": [
                    "psd",
                    "doc"
                ]
            }
        ];
        var traversalTest = function() {
        	traversal(dirStru, currentPath);
        }
        expect(traversalTest).not.to.throw(Error);
    });
})
