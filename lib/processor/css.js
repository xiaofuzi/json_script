var cssProcessor = function(cssData){
	var css = '',
		newline = '\n';

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
		for(var selector in cssData){
			var entity = selector + ' {' + newline,
				areThereAnyAttrs = false;
				for(var attr in cssData[selector]){
					var value = cssData[selector][attr];
					if(value !== false){
						areThereAnyAttrs = true;
						entity += '  ' + attr + ': ' + value + ';' + newline;
					}
				}
				entity += '}' + newline;
				css += areThereAnyAttrs ? entity : '';
		}
		return css;
}

module.exports = function(cssData, callback) {
	callback(cssProcessor(cssData));
}