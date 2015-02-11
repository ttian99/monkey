// 当前时间： 
moment().format('YYYY-MM-DD HH:mm:ss');
var datetime = moment().format('YYYY-MM-DD HH:mm:ss');
document.write(datetime);
2015 - 02 - 11 14: 37: 01
今天是星期几： moment().format('d');
var weekday = moment().format('d');
document.write(weekday);
3
Unix时间戳： moment().format('X');
var timestamp = moment().format('X');
document.write(timestamp);
1423636621



相对时间： moment("20130101", "YYYYMMDD").fromNow();
var d1 = moment("20130101", "YYYYMMDD").fromNow();
document.write(d1);
2 years ago
相对时间： moment("20151010", "YYYYMMDD").fromNow();
var d2 = moment("20151010", "YYYYMMDD").fromNow();
document.write(d2); in 8 months
7 天后的日期： moment().add('days', 7).format('YYYY年MM月DD日');
var d3 = moment().add('days', 7).format('YYYY年MM月DD日');
document.write(d3);
2015 年02月18日
9 小时后： moment().add('hours', 9).format('HH:mm:ss');
var d4 = moment().add('hours', 9).format('HH:mm:ss');
document.write(d4);
23: 37: 01
明天moment().add(1, 'days').calendar();
var d5 = moment().add(1, 'days').calendar();
document.write(d5);
Tomorrow at 2: 37 PM