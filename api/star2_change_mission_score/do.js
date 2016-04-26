var rf = require('../lib/fs-read.js');
var wf = require('../lib/fs-write.js');
var fs = require('fs');

var res = './data/1.txt';
var out = './data/out/1.txt';
var len = 60;
var sArr = [1950, 2340, 2730, 2860, 2990, 3120, 3250, 3380, 3510, 3640, 3770, 3900, 4030, 4160, 4290, 4420, 4550, 4680, 4810, 4940, 5070, 5200, 5330, 5460, 5590, 5720, 5850, 5980, 6110, 6240, 6370, 6500, 6630, 6760, 6890, 7020, 7150, 7280, 7410, 7540, 7670, 7800, 7930, 8060, 8190, 8320, 8450, 8580, 8710, 8840, 8970, 9100, 9230, 9360, 9490, 9620, 9750, 9880, 10010, 10140];


function main() {
	for (var i = 0; i < len; i++) {
		res = './olddata/' + (i + 1) + '.txt';
		var str = fs.readFileSync(res, 'utf-8');
		json = JSON.parse(str);
		// json.score[0] = sArr[i];
		console.log(i + 1, json.score[0]);
		// var outStr = JSON.stringify(json, null, 2);
		// out = './out/'+ (i + 1) + '.txt';
		// fs.writeFileSync(out, outStr, 'utf-8');
	}
}

main();