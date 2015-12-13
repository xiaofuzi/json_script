module.exports = function(convert){
	return function(path){
		if(typeof path == 'string'){
			try {
				require(path)(convert);
			} catch(err){
				console.log("错误：找不到文件" + path + "!");
			}
		}else{
			for(var i=0; p=path[i]; i++){
				try{
					require(p)(convert);
				} catch(err){
					console.log("错误：找不到文件"+ p + "!");
				}
			}
		}
		return convert;
	}
}