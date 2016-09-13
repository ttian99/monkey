var arr = [
	'上步中路1045号深勘大院平房101',
	'深勘大院保安岗亭101',
	'上步中路1045号深勘大院2栋101',
	'上步中路1045号深勘大院2栋102',
	'上步中路1045号深勘大院2栋深勘大院2栋101'
];

var words = '深勘大院';
var str = arr[4];
// 获取栋数与楼层
function getIndex(str, words) {
	var tmpStr = str;
	var reg = new RegExp(words, 'g');
	tmpStr = tmpStr.replace(reg, ",");
	var tmpArr = tmpStr.split(",");
	var len = tmpArr.length - 1;
	return tmpArr[len];
}

var _ = require('lodash');
var newArr = []
_.map(arr, function(item, id) {
	console.log('== item = ' + item);
	var idx = getIndex(item, words);
	console.log('-- idx = ' + idx);


	// var len = item.length;
	// // console.log(typeof(item));
	// var pos = item.lastIndexOf(words);
	// console.log(pos);
	// var idx = -pos;
	// var subStr = item.substr(idx);
	// console.log(subStr);
	// newArr.push(subStr);
	// // var reg = new Regexp(words, 'g');
	// // var reg = '/'+ words + '/g';
	// // reg.exec();
});