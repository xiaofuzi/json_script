var jsonScript = require('../app');

jsonScript(function(convert){
	convert.import(__dirname + '/jsonCss');
}).renderFile(__dirname + '/outPut.css');