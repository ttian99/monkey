var fs = require('fs');
var fsw = require('./lib/fs-write.js');
var fsr = require('./lib/fs-read.js');
var xlsx = require('./lib/xlsxToJson.js');
var _ = require('lodash');

var async = require('async');

var resource = './res/test.xlsx';
var dstDir = './out/';
var extName = '.json';
var sheetName = 'futian';


var sheetArr = [];

// 读取要输出的配置信息
fsr('./project.json', function(err, data) {
	if (err) console.log(err);
	console.log(data);
	sheetArr = data.outArr;
	_.map(sheetArr, function(item, id) {
		readSchoolArr(item);	
	});
});


// 读取学校对应小区数组
function readSchoolArr(sheetName) {
	var s2vJson = dstDir + sheetName + '-学校对应小区' + extName;
	fsr(s2vJson, function(err, data) {
		if(err) console.log(err);
		console.log(data.length);
		var arr = data;
		transVillageArr(sheetName, arr);
	})
}


function transVillageArr(sheetName, arr) {
	// var villageArr = [];
	var villageObj = {};
	var keys = _.keys(arr);
	var arrLen = arr.length;
	_.map(arr, function(item, id) {
		var valueArr = _.values(item);
		var keyArr = _.keys(item);
		var key = keyArr[0];
		var valueArr = valueArr[0];

		_.map(valueArr, function(some, idx){
			var obj = {};
			obj.schoolList = [];

			// console.log('some = ' + some);
			// console.log(villageObj[some])

			if (villageObj[some] && villageObj[some].schoolList){
				villageObj[some].schoolList.push(key);
			} else {
				obj.area = sheetName;
				obj.schoolList.push(key);
				villageObj[some] = obj;
			}
		});

		if (id === arrLen - 1) {
			console.log('--------------' + sheetName + ' map arr over ---------');
			
			// 剔除无效值
			villageObj = delNilValue(villageObj);
			// 数组去重
			villageObj = deDup(villageObj);
			
			var villageStr = JSON.stringify(villageObj);
			var v2sJson = dstDir + sheetName + '-小区对应学校' + extName;
			fsw(v2sJson, villageStr);
		}
	});
}

// 剔除无效值
function delNilValue(obj) {
	// 去掉key为"无"
	delete(obj["无"]);
	
	// 去掉以'民办'|'私立开头的'
	_.mapKeys(obj, function(value, key) {
		if(checkIsSelf(key)) {
			delete(obj[key]);
		}
	});
	return obj;
}

// 检查是否是民办|私立开头的
function checkIsSelf(str) {
	var regSelf = new RegExp('^私立', 'g');
	var regSelf2 = new RegExp('^民办', 'g');
	var isSelfSchool = regSelf.test(str);
	var isSelfSchool2 = regSelf2.test(str);
	var ret = isSelfSchool || isSelfSchool2;
	return ret;
}

// 数组去重
function deDup(obj) {
	var ret = _.mapValues(obj, function(o) {
		var tmpArr = _.uniq(o.schoolList);
		o.schoolList = tmpArr;
		return o;
	});
	return ret;
}

return;