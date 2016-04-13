var fs = require('fs');
var async = require('async');
var XML = require('pixl-xml'); //读取xml文件
var XMLWriter = require('xml-writer'); //写xml文件 

var doc = null;
var objArr =[];
var attrArr = [];

function readXml(){
	try {
		doc = XML.parse('./res/AndroidManifest.xml');
		var str = JSON.stringify(doc);
		fs.writeFileSync('./out.json', str, 'UTF-8');
	} catch (err) {
		console.log("XML Parser Error: " + err);
	}	
}

function checkDoc(){
	for(var key in doc){
		console.log("key = " + key);
		console.log('doc.key = ' + typeof(doc[key]));
		if(typeof(doc[key]) === 'string'){
			attrArr.push(key);
		} else {
			objArr.push(key);
		}
	}
	console.log(attrArr);
	console.log(objArr)
}

var ws = fs.createWriteStream('tmp.xml');
console.log('+++++++++++++++++++++++++++++');
ws.on('close', function() {
	var str = fs.readFileSync('tmp.xml', 'UTF-8');
	// console.log(fs.readFileSync('tmp.xml', 'UTF-8'));
	// writeXml(str);
});
var xw = new XMLWriter(false, function(string, encoding) {
	ws.write(string, encoding);
});

xw.startDocument('1.0', 'UTF-8');

readXml();
checkDoc();
writeManiFestElement(xw, doc, objArr);


// async.series([function(done){
// 	var doc = readXml();
// 	done(null, doc);
// }, function(done){
// 	checkDoc();
// 	done(null, null);
// }, function(done){
// 	writeManiFestElement(xw, doc, attrArr);
// }, function(){
// 	xw.end();
// }
// ],function(err, result) {
//    // do somethig with the err or values v1/v2/v3
//    console.log(err);
//    console.log(result);
//    // writeManiFestElement(xw, doc, attrArr);
// });

function writeManiFestElement(xw, doc, arr) {
	xw.startElement('manifest');
	console.log('arr = ' + arr);
	for(var i = 0; i < arr.length; i++){
		xw.writeAttribute(arr[i], doc[arr[i]]);
	}
	xw.endElement();
}

function writePermission(xw, doc, arr) {
    for(var i = 0; i < arr.length; i++){
        xw.startElement('uses-permission');
        xw.writeAttribute('android:name', doc[arr[i]]);
		xw.endElement();
    }
}


// xw.writeAttribute('xmlns:android','http://schemas.android.com/apk/res/android');	
// xw.writeAttribute('package','com.zeusky.star');
// xw.writeAttribute('android:installLocation','auto');
// xw.writeAttribute('android:versionCode','156');
// xw.writeAttribute('android:versionName','1.5.600');
// xw.endElement();
	
	// 测试写xml代码 	
	// // xw.startPI('haha');
	// // xw.endPI();
	
	// // xw.writeCData('kkkk');
	// // xw.startCData();
	// // xw.endCData();
	
	// xw.writeComment('dsfsdfsdf');
	


function writeXml(str) {
	fs.writeFile('./out/out.xml', str, function(err, data){
		console.log('--write file--')
		console.log(err);
		// console.log(data);
	});
}