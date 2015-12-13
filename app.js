var fs = require('fs'),
    cssProcessor = require("./lib/processor/css");


module.exports = jsonScript = function(path) {
    var _jsonScript = {};
    var convert = require("./lib/convert")();

    _jsonScript.convert = convert;

    var render = _jsonScript.render = function(callback) {
        if (typeof path == 'function') {
            path(convert);
        }
        cssProcessor(convert.getCss(), callback);
        return _jsonScript;
    }

    /*输出到文件*/
    var renderFile = _jsonScript.renderFile = function(dest){
    	render(function(css){
    		console.log("File:", css);
    		fs.writeFile(dest, css, function(err){
    			if(err){
    				console.log(dest + " generate success!");
    			}
    		})
    	})
    }
    return _jsonScript;
}

