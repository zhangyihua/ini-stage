module.exports = function() {
	var fs = require('fs'),
        conf = require('./conf')

    return {
        checkIsFile: function(item) {
            return /^\#/.test(item);
        },

        // the fileName should be start with #
        getFileName: function(fileName) {
            if (!this.checkIsFile(fileName)) {
                throw new Error(fileName + 'isn\'t a file, a file should be start with #');
            }
            return fileName.length > 2 ? fileName.substr(1, fileName.length - 1) : conf.DEF_FILE_NAME + Date.now();
        },

        pathExists: function(path) {
            if (fs.existsSync(path)) {
                var logStr = path.gray + " exists".red;
                console.log(logStr);
                return true;
            }
            return false;
        }
    }
}
