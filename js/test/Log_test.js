/*
 *	auth: monkey jiao
 * 	date: 2015-02-11
 *
 *
	Mirror that of syslog:
	0 EMERGENCY  system is unusable
	1 ALERT action must be taken immediately
	2 CRITICAL the system is in critical condition
	3 ERROR error condition
	4 WARNING warning condition
	5 NOTICE a normal but significant condition
	6 INFO a purely informational message
	7 DEBUG messages to debug an application 
 */

function main() {
	log_Style();
	// log_Save();
	// replace_level();
}

main();



// log输出的格式
function log_Style() {
	var Log = require('log');
	var log = new Log('info');

	log.debug('preparing email');
	log.info('sending email');
	log.error('failed to send email');
}

//用文件保存log
function log_Save() {
	var fs = require('fs');
	Log = require('log');
	log = new Log('debug', fs.createWriteStream('Log_test.log'));
	log.debug("dssfsdfsfdfasdfdafdasdfda");
}

//替换日志级别的
function replace_level() {
	var Log = require('log'),
		log = new Log('warning');
		// log.error('oh no, failed to send mail to %s.',user.email);
		log.debug("dfsdfsdfd");
}