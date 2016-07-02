var fs = require('fs');

module.exports = function writeFile(dst, str, cb){
	fs.writeFile(dst, str, 'utf-8', function(err, data) {
		if(err){
			console.log(err);
			cb(err, data);
			return;
		}
		console.log("-- file have writeFile at " + dst);
		cb(null, data);
	});
}