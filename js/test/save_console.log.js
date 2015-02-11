// var lastLog;
// var fs = require("fs-extra");
// console.oldLog = console.log;
// var count = 0;
// var lastLog = [];
// console.log = function(str, i) {
// 		i = count;
// 		console.oldLog(str);
// 		lastLog[i] = str;
// 		fs.appendFile('message.txt', lastLog[i]+"\n", 'utf8',function(err) {
// 			if (err) throw err;
// 			// console.log('\nThe "data to append" was appended to file!'); //数据被添加到文件的尾部
// 		});
// 		i++;
// 		count = i;
// 	}
// console.log("Hello, Neo");
// console.log("将 发的啥看法");


// document.write(lastLog);


//// log输出的格式
// var Log = require('log');
// var log = new Log('info');

// log.debug('preparing email');
// log.info('sending email');
// log.error('failed to send email');

//用文件保存log
var fs = require('fs');
Log = require('log');
log = new Log('debug', fs.createWriteStream('my.log'));
log.debug("dssfsdfsfdfasdfdafdasdfda");

var Log = require('log')
  , log = new Log('warning');