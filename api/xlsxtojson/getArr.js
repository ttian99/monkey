var fs = require('fs-extra');
var xslxToJson = require('../lib/xslxToJson')

var res = './mgc.json';
var out = './out.json';
var arr = [];

function readJson(res, cb) {
	fs.readFile(res, 'utf-8', function(err, data) {
		if (err)
			console.log(err);
		// console.log(data);
		var ret = JSON.parse(data);
		cb && cb(ret);
	});
}

function writeJson(str) {
	fs.writeFile(out, str, 'utf-8', function(err, data){
		if (err)
			console.log(err)
		console.log('writeJson over!');
	});
}

function getAllInArr(arr) {
	// console.log(arr);
	var totalArr = [];
	for (var i = 0; i < arr.length; i++) {
		for (var key in arr[i]) {
			// console.log("== key = " + key)
			// console.log('== arr[i][key] =' + arr[i][key]);
			var str = arr[i][key];
			if (str) {
				totalArr.push(str);
			}
		}
	}
	// console.log(totalArr);
	var str = JSON.stringify(totalArr);
	return str;
}

function getInerArr(arr) {
	// console.log(arr);
	var fArr = [];
	var sArr = [];
	var lArr = [];
	for (var i = 0; i < arr.length; i++) {
		for (var key in arr[i]) {
			// console.log("== key = " + key)
			// console.log('== arr[i][key] =' + arr[i][key]);
			var str = arr[i][key];
			if (str) {
				if (key == 'first') {
					fArr.push(str);
				} else if (key == 'second') {
					sArr.push(str);
				} else if (key == 'last'){
					lArr.push(str);
				}
			}
		}
	}
	var str = JSON.stringify(fArr) + '\n\n' + JSON.stringify(sArr) + '\n\n' + JSON.stringify(lArr);
	return str;
}

function main() {
	readJson(res, function(arr) {
		// var str = getInerArr(arr);
		var str = getAllArr(arr);
		writeJson(str);
	});
}

main();