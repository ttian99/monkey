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


// 读取project.json配置文件
fsr('./project.json', function(err, data) {
	if (err) console.log(err);
	console.log(data);
	
	// 输出表格名数组
	var sheetArr = data.outArr;
	getData(sheetArr);
});


// // 遍历表格名字数组
// function mapSheetArr(cb) {
// 	_.map(sheetArr, cb);
// }

// 提取表格数据
function getXslxData(res, dst, sheetName, cb) {
	xlsx(res, dst, sheetName, function(err, data) {
		if (err) {
			console.log('xslxToJson err: ' + err);
			cb && cb(err)
			return;
		}
		var jsonStr = JSON.stringify(data);
		// console.log('xslxToJson data : ' + jsonStr);
		cb && cb(null, data)
	});
}


function getData(arr) {
	_.map(arr, school2Village);
}

// 小区对应学校
function school2Village(item, id) {
	console.log('-- read sheet: ' + item);
	var s2vJson = dstDir + item + '-学校对应小区' + extName;
	var schoolJson = dstDir + item + '-学校' + extName;
	var villageJson = dstDir + item + '-小区' + extName;
	async.waterfall([
		function(callback) {
			getXslxData(resource, s2vJson, item, function(err, data) {
				callback(null, data);
			})
		},
		function(arg1, callback) {
			var s2vArr = []; // 学校对应小区数组
			var schoolArr = []; // 学校数组
			var villageArr = []; // 城市数组

			// 格式化数组
			arg1 = formatArr(item, arg1);

			_.map(arg1, function(some, idx) {
				var key = some['招生学校'];
				var range = some['招生范围'];

				var rangeArr = [];
				if (checkSelf(range)) {
					rangeArr.push(range);
				} else {
					rangeArr = range.split(',');
				}
				// console.log("== rangeArr = " + JSON.stringify(rangeArr));

				// 去除无效值
				// rangeArr = delInvalidValue(rangeArr);

				var obj = {};
				obj[key] = rangeArr;
				s2vArr.push(obj);
				schoolArr.push(some['招生学校']);
				villageArr = villageArr.concat(rangeArr);

				var len = arg1.length;
				if (idx === len - 1) {
					// 过滤掉数组的假值
					_.compact(s2vArr);
					_.compact(schoolArr);
					_.compact(villageArr);
					callback(null, s2vArr, schoolArr, villageArr);
				}
			});
		}
	], function(err, s2vArr, schoolArr, villageArr) {
		if (err) {
			console.log('there is some error for async');
			return;
		}
		var s2vStr = JSON.stringify(s2vArr);
		var schoolStr = JSON.stringify(schoolArr);
		var villageStr = JSON.stringify(villageArr);

		fsw(s2vJson, s2vStr);
		fsw(schoolJson, schoolStr);
		fsw(villageJson, villageStr);
	});
}

// 格式化数组
function formatArr(sheetName, arr) {
	var jsonStr = JSON.stringify(arr);
	// 全角逗号转换为半角
	jsonStr = jsonStr.replace(/，/g, ',');

	// 替换'&#10;'为'，'
	jsonStr = jsonStr.replace(/&#10;/g, ',');

	if (sheetName === '福田') {
		// 去掉类似'10：'开头的数字
		jsonStr = jsonStr.replace(/\d+：/g, '');
	}

	var reArr = JSON.parse(jsonStr);
	return reArr;
}

// 检查是否是民办开头的
function checkSelf(str) {
	var regSelf = new RegExp('^私立', 'g');
	var regSelf2 = new RegExp('^民办', 'g');
	var isSelfSchool = regSelf.test(str);
	var isSelfSchool2 = regSelf2.test(str);
	var ret = isSelfSchool || isSelfSchool2;
	return ret;
}

// 剔除无效值
function delInvalidValue(arr) {
	var len = arr.length;
	_.map(arr, function(item, id) {
		console.log('item = ' + item);
		if (item === '无') {
			arr = arr.splice(id, 1);
		} else if (item === '') {
			arr = arr.splice(id, 1);
		}

		if (id = len - 1) {
			console.log(JSON.stringify(arr))
			return arr;
		} 
	});
}