var fs = require('fs');

module.exports = function(){
	var convert = {},
		cssData = {};

	convert.getCss = function(){
		/*cssData:
		{
			'.wrap': {
				'margin-top': '20px',
				'padding': '20px',
				'color': '#444',
				p: false
			},
			'.wrap p': {
				'padding-top': '20px',
				'font-size': '28px'
			}
		}
		*/
		return cssData;
	}

	convert.clean = function(){
		cssData = {};
	}

	var methods = fs.readdirSync(__dirname + "/core");
	for(var i=0; i<methods.length; i++) {
		var file = methods[i];
		convert[file.replace(".js", "")] = require(__dirname + "/core/" + file)(convert);
	}

	return convert;
}