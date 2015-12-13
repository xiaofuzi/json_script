module.exports = function(convert) {
    convert.css({
        '.wrap': {
            'margin-top': '20px',
            'padding': '20px',
            'color': '#444',
            p: {
                'padding-top': '20px',
                'font-size': '28px',
                a: {
                    'color': "red",
                    ':hover': {
                        'color': '#999',
                        'font-size': '18px'
                    }
                }
            }
        }
    });
    return convert;
}
