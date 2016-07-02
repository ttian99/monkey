var XML = require('pixl-xml');

var doc = null;
try {
	doc = XML.parse('./res/AndroidManifest.xml');
} catch (err) {
	console.log("XML Parser Error: " + err);
}
console.log(doc);

