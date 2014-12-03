var tag;
function today(pdate){
//获取实时时间
var packdate=new Date();
console.log(packdate);
// 分别获取对应数据
year = packdate.getFullYear();
month =packdate.getMonth() + 1;//js获取月份以0开始,'0'代表一月份。
date = packdate.getDate();
hours = packdate.getHours();
minutes = packdate.getMinutes();
seconds = packdate.getSeconds();
//在小于10的数字面前加0
if (month <10) month='0'+ month;
console.log(month);
if (date <10) date='0'+ date;
console.log(date);
if (hours <10) hours='0'+hours;
console.log(hours);
if (minutes <10) minutes='0'+minutes;
console.log(minutes);
if (seconds <10) seconds='0'+seconds;
console.log(seconds);
pdate= year + "" + month + "" + date + "" + hours + "" + minutes + "" + seconds;
console.log(pdate);
tag = pdate;
//process.argv.splice(2) = pdate
}
//拼接字符串
today(); 
//var tag = process.argv.splice(2);
console.log(tag);

