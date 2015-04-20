
/**
 * [moment description]
 * @author : monkey_jiao
 * @url: http://momentjs.com/
 * @beta: 1.0.0
 * @Date: 2015-04-20
 */
var moment = require('moment');
var JJ = JJ||{}


JJ.nowTime = function(tf) {
	return moment().format(tf);
}

JJ.nowDay = function() {
	return moment().format('d');
}

JJ.unix = function() {
	return moment().format('X');
}

JJ.fromNow = function(time, tf){
	return moment(time, format).fromNow();
}

JJ.afterTime = function(number, period, tf){
	moment().add(number, period).format(format);
}


// JJ.nowTime("YYYYMMDD");
var test = JJ.nowDay();

console.log(test);


// moment("20151010", "YYYYMMDD").fromNow();
// var d2 = moment("20151010", "YYYYMMDD").fromNow();
// console.log(d2); //in 8 months

/**
 * 
 ****************************************************
// 当前时间： 
moment().format('YYYY-MM-DD HH:mm:ss');
var datetime = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(datetime); //2015 - 02 - 11 14: 37: 01

//今天是星期几： 
moment().format('d');
var weekday = moment().format('d');
console.log(weekday); //3

//Unix时间戳： 
moment().format('X');
var timestamp = moment().format('X');
console.log(timestamp); //1423636621

//相对时间： 
moment("20130101", "YYYYMMDD").fromNow();
var d1 = moment("20130101", "YYYYMMDD").fromNow();
console.log(d1); //2 years ago

//相对时间： 
moment("20151010", "YYYYMMDD").fromNow();
var d2 = moment("20151010", "YYYYMMDD").fromNow();
console.log(d2); //in 8 months

//7 天后的日期： 
moment().add(7, 'days').format('YYYY年MM月DD日');
var d3 = moment().add(7, 'days').format('YYYY年MM月DD日');
console.log(d3); //2015 年02月18日

//9 小时后： 
moment().add('hours', 9).format('HH:mm:ss');
var d4 = moment().add('hours', 9).format('HH:mm:ss');
console.log(d4); //23: 37: 01

//明天
moment().add(1, 'days').calendar();
var d5 = moment().add(1, 'days').calendar();
console.log(d5); //Tomorrow at 2: 37 PM
****/ 