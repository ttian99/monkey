var a = "111";
var b = "233";
var c = 233;
vers = 've'
part='cmcc'
var d = "dddf" + a + b + " " + c;
console.log(d);
var cmd = new String();

//利用.replace方法将变量与字符串连接起来
cmd = 'node build_apk.js good c';
p = cmd.replace('good',vers)
p = cmd.replace('c',part)
//cmd=cmd.toString()
console.log(p);