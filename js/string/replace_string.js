/*
*需求
*A原始需求
*修改某个文件中的字符串，替换为另一个字符串，调用方式如下：
*node xx.js 原始文件 目标文件 待替换的字符串 替换后的字符串

*B优化需求
*1判断文件存在
*4参数不够怎么办？
*2全部替换
*3替换字符中包含空格怎么办？
*/

var fs = require('fs');
//检查文件是否存在
function filecheck1(src) {	
  try {
    var data = fs.readFileSync(src);// Deal with data.
    return true;
    } catch (err) {
        console.log('错误:\n' + err.message);// Deal with error.
        return false;
    }
}  
/*function filecheck2(src){
	var exists=fs.exists(src);
}*/
//检查输入参数是否正确
function checkargv(){
	if (process.argv.length < 6)
	{
		console.log('输入参数不完全,请按照如下格式输入参数:\n' + 'node xxx.js 原始文件 目标文件 待替换的字符串 替换后的字符串');
	}
	else if (process.argv.length > 6) {
		console.log('含有空格的参数请加引号输入如"go home"');
	}
	else {
    return true;
	}
}
//进行字符串替换，输出修改后的文件
function rep(src,dst,old,now) {
    var read = fs.readFileSync(src);
    read = read.toString();
    regold = new RegExp(old,'g');//创建正则表达式,'g'全局匹配
    write = read.replace(regold,now);//全局替换
    console.log(write);//输出替换后的文件内容
    fs.writeFileSync(dst,write); 
    console.log("替换完成！");
}
function main(argv) {
    var fcheck = filecheck1(argv[2]);
    if (fcheck == true) {
      var acheck = checkargv(process.argv);
    }
    console.log(acheck);
    if (acheck == true) {
      rep(argv[2],argv[3],argv[4],argv[5]); 
    }
}
main(process.argv);









