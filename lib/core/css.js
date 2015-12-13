module.exports = function(convert) {
    /*cssData save*/
    var addCss = function(selector, attrs){
        for(var attr in attrs){
            if(typeof attrs[attr] === 'string'){
                convert.getCss()[selector] = attrs;
            }else if(typeof attrs[attr] === 'object'){
                /*伪类处理*/
                if(attr[0] == ':'){
                    addCss(selector + attr, attrs[attr]);
                }else{
                    addCss(selector + " " + attr, attrs[attr]);
                }
                attrs[attr] = false;
            }
        }
    }

    var writeCss = function(cssData) {
        for (var selector in cssData) {
            addCss(selector, cssData[selector]);
        }
        return convert;
    }
    return writeCss;
}
