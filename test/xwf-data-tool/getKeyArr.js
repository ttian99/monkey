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


var sheetArr = ['福田'];


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

function getKeyArr() {
	_.map(sheetArr, function(item, id) {
		var dst = dstDir + item + extName;
		getXslxData(resource, dst, item);
	});
}


// 小区对应学校
function school2Village() {
	// mapSheetArr(getData(item, id));
	_.map(sheetArr, getData);


	// mapSheetArr(function(item, id) {
	// 	var dst = dstDir + item + '-学校对应小区' + extName;
	// getXslxData(resource, dst, item, function(err, data) {
	// 	if (err) {
	// 		console.log('getXslxData error');
	// 		return;
	// 	}

	// 	var arr = [];
	// 	_.map(data, function(some, idx) {
	// 		// console.log('-- some ==');
	// 		console.log('============= idx = ' + idx);
	// 		var key = some['招生学校'];
	// 		var range = some['招生范围']
	// 		var obj = {};
	// 		obj[key] = range;

	// 		console.log('======= obj = ' + JSON.stringify(obj));
	// 		// obj.name = some['招生学校'];
	// 		// obj. = some['招生范围'];
	// 		arr.push[obj];

	// 		var len = data.length;
	// 	});

	// 	var jsonStr = JSON.stringify(arr);
	// 	fsw(dst, jsonStr);
	// });
	// });
}

function getData(item, id) {
	var dst = dstDir + item + '-学校对应小区' + extName;

	async.waterfall([
		function(callback) {
			getXslxData(resource, dst, item, function(err, data) {
					callback(null, data);
				})
				// getXslxData(resource, dst, item, function(err, data) {
				// 	if (err) {
				// 		console.log('getXslxData error');
				// 		return;
				// 	}

			// 	var arr = [];
			// 	_.map(data, function(some, idx) {
			// 		// console.log('-- some ==');
			// 		console.log('============= idx = ' + idx);
			// 		var key = some['招生学校'];
			// 		var range = some['招生范围']
			// 		var obj = {};
			// 		obj[key] = range;

			// 		console.log('======= obj = ' + JSON.stringify(obj));
			// 		// obj.name = some['招生学校'];
			// 		// obj. = some['招生范围'];
			// 		arr.push[obj];

			// 		var len = data.length;
			// 	});

			// 	var jsonStr = JSON.stringify(arr);
			// 	fsw(dst, jsonStr);
			// });
		},
		function(arg1, callback) {
			var arr = [];
			_.map(arg1, function(some, idx) {
				var key = some['招生学校'];
				var range = some['招生范围'];
				var obj = {};
				obj[key] = range;
				arr.push(obj);

				var len = arg1.length;
				if (idx === len - 1) {
					console.log(JSON.stringify(arr));
					callback(null, arr);
				}
			});
		}
	], function(err, result) {
		if (err) {
			console.log('there is some error for async');
			return;
		}
		console.log(result);
		var jsonStr = JSON.stringify(result);
		if (item === '福田') {
			console.log('---------');
			jsonStr = fuTianFormat(jsonStr);
		}
		fsw(dst, result);
	});
}


function fuTianFormat(jsonStr) {
	// 替换'&#10;'为'，'
	jsonStr = jsonStr.replace(/&#10;/g, '，');
	// 去掉类似'10：'开头的数字
	jsonStr = jsonStr.replace(/\d+：/g, '');
	return jsonStr;
}
school2Village();