## json to css

类似于less、sass这样的css预处理器，这里采用json格式的语法来编写css，如下所示：

json文件：
```javascript
{
	'.wrap': {
		'margin-top': '20px',
		'padding': '20px',
		'color': '#444',
		p: {
			'padding-top': '20px',
			'font-size': '28px'
		}
	}
}
```

生成的css：
```css
.wrap {
  margin-top: 20px;
  padding: 20px;
  color: #444;
}
.wrap p {
  padding-top: 20px;
  font-size: 28px;
}
```

## 安装

```git 
npm install --save json_script
```

## 使用

1. 新建一个.js文件
2. 添加如下代码

```node
var json_script = require('json_script');

json_script(function(convert) {
    convert.css({
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
	console.log("渲染后的css:", css);
})
```
## 资源

* 文档地址: http://www.yangxiaofu.com/json_script
* github: https://github.com/xiaofuzi/json_script

遵从MIC协议