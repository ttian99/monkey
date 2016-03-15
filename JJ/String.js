
// 检查字符串的长度
String.prototype.gblen = function() {  
  var len = 0;  
  for (var i=0; i<this.length; i++) {  
    if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {  
       len += 2;  
     } else {  
       len ++;  
     }  
   }  
  return len;  
}

// 提取字符串

var str = "的冯绍峰的算法方式";
var str2 = str.slice(0,6);
console.log(str2);


// 正则表达式匹配
// 1.匹配汉字
// Example: 
// var str = "叫适当的方式副书记发"
// var result = new RegExp("^[\u4e00-\u9fa5]$").test("式");
// console.log(result);
//
String.prototype.regExp = function(testStr) {
	var result = new RegExp("^[\u4e00-\u9fa5]$").test(testStr);
	console.log(result);
	return result;
}

/**
* windows路径转换为unix的路径格式
*/ 
String.prototype.toUnixPath = function() {
  var arr = this.split('\\');
  var ret = arr[0];
  for (var i = 0; i < arr.length; i++) {
    (i === 0) ? (ret = arr[0]) : (ret += '/' + arr[i]);
  }
  return ret;
};
