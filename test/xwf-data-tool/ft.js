var arr = [
'上步中路1045号深勘大院平房101', 
'深勘大院保安岗亭101', 
'上步中路1045号深勘大院2栋101', 
'上步中路1045号深勘大院2栋102',
'上步中路1045号深勘大院2栋深勘大院2栋101'
];

var _ = require('lodash');

var words = '深勘大院';
var newArr = []
_.map(arr, function(item, id) {
	console.log('== item = ' + item);
	var len = item.length;
	// console.log(typeof(item));
	var pos = item.lastIndexOf(words);
	console.log(pos);
	var idx = -pos;
	var subStr = item.substr(idx);
	console.log(subStr);
	newArr.push(subStr);
	// var reg = new Regexp(words, 'g');
	// var reg = '/'+ words + '/g';
	// reg.exec();
});