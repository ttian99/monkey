//同步方式读取文件失败
try {
	var fs=require('fs');
    var data = fs.readFileSync("./jj.js");
    // Deal with data.
} catch (err) {
    // Deal with error.
    console.log('错误:' + err.message);
}

















