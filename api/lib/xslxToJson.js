var xlsxj = require("xlsx-to-json");

/**
*	xlsxToJson
*/ 
module.exports = function xlsxToJson(input, output, sheetName) {
	if (!input) {
		console.log('input cannot null!');
	}
	if (!output) {
		console.log('output cannot null!');
	}
	xlsxj({
		input: input,
		output: output,
		sheet: sheetName
	}, function(err, result) {
		if (err) {
			console.error(err);
		} else {
			console.log(result);
		}
	});
}
