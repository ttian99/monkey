var XMLWriter = require('xml-writer'),
               fs = require('fs');
	var ws = fs.createWriteStream('tmp.xml');
	console.log('+++++++++++++++++++++++++++++');
	ws.on('close', function() {
		var str = fs.readFileSync('tmp.xml', 'UTF-8');
		console.log(fs.readFileSync('tmp.xml', 'UTF-8'));
		writeXml(str);
	});
	var xw = new XMLWriter(false, function(string, encoding) {
		ws.write(string, encoding);
	});
	
	xw.startDocument('1.0', 'UTF-8');
	xw.startElement('manifest');
	xw.writeAttribute('xmlns:android','http://schemas.android.com/apk/res/android');	
	xw.writeAttribute('package','com.zeusky.star');
	xw.writeAttribute('android:installLocation','auto');
	xw.writeAttribute('android:versionCode','156');
	xw.writeAttribute('android:versionName','1.5.600');
	xw.endElement();
	
	
	// xw.startPI('haha');
	// xw.endPI();
	
	// xw.writeCData('kkkk');
	// xw.startCData();
	// xw.endCData();
	
	xw.writeComment('dsfsdfsdf');
	
	ws.end();	
	function writeXml(str) {
		fs.writeFile('./out/out.xml', str, function(err, data){
			console.log('--write file--')
			console.log(err);
			console.log(data);
		});
	}