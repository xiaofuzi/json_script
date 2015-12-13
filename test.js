var jsonScript = require('./app');


jsonScript(function(convert) {
    convert.add({
        '.wrap': {
            'margin-top': '20px',
            'padding': '20px',
            'color': '#444',
            p: {
                'padding-top': '20px',
                'font-size': '28px'
            }
        }
    });
}).render(function(css){
	console.log("渲染后的css:");
	console.log(css);
})