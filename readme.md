## json to css

以json格式来编写css，类似于less、sass这样的css预处理器，这里采用json格式的语法来编写css，如下所示：

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
