　//1、字符串转换为十六进制
　　//主要使用 charCodeAt()方法，此方法返回一个字符的 Unicode 值，该字符位于指定索引位置。
　　function stringToHex(str){
　　　　var val="";
　　　　for(var i = 0; i < str.length; i++){
　　　　　　if(val == "")
　　　　　　　　val = str.charCodeAt(i).toString(16);
　　　　　　else
　　　　　　　　val += "," + str.charCodeAt(i).toString(16);
　　　　}
　　　　return val;
　　}
　　//调用方法：
　　var str = "abcde";
　　stringToHex(str);
 
　　//2、十六进制转换为字符串
　　//主要使用 fromCharCode()方法，此方法将 Unicode 码转换为与之对应的字符。
　　function hexToString(str){
　　　　var val="";
　　　　var arr = str.split(",");
　　　　for(arr i = 0; i < arr.length; i++){
　　　　　　val += arr[i].fromCharCode(i);
　　　　}
　　　　return val;
　　}
　　//调用方法：
　　var str = "676865";
　　stringToHex(str);
 
　　//3、用 parseInt() 方法转换
　　//parseInt(string, radix) 方法只能转换 String 类型，对其它类型都返回 NaN（非数字）。string 表示待转换的字符，radix 表示要转为的进制，值介于 2 ~ 36 之间。
　　parseInt("bc",16); //表示把字符串bc转换为16进制，结果：188
　　parseInt("10",8); //表示把字符串10转换为8进制，结果：8
　　parseInt("10",2); //表示把字符串10转换为2进制，结果：2
  
