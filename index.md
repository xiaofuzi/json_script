---
title: json_script,一个轻量级的css预处理器
layout: _tpl/layout.html
tags:
  - node
  - js
  - json_script
---

## 文档列表

* 安装
* API


## 安装

```git 
npm install --save json_script
```

## API

  * 引入
  	```node
  	var json_script = require('json_script');
	```
  * json_script(callback)
  	* convert对象：这是内部的处理转换对象
  	* path: 可以是一个路径[字符串格式]或是一个函数
  	* convert.css(path)
  		示例：
  		path为如下格式的函数
  		```node
  		function(convert) {
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
		}
		```
		调用：
		```node
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
		})
		```
	* convert.import(path)
		path是一个有效的文件名，文件类型为commonJS格式js文件
		如一个名为:jsonCss.js的文件：
		```node
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
		```
		调用：
		```node
		jsonScript(function(convert){
			convert.import(__dirname + '/jsonCss');
		})
		```
	* json_script.render(callbakc):返回渲染后的css样式
		示例：
		```node
		function(css){
			console.log("渲染后的css:", css);
		}
		```
	* json_script.renderFile(file): 输出到指定文件
