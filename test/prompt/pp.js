var inquirer = require('inquirer');

module.exports = function selTask(message, taskList, cb) {
	var type1 = {
		type: 'list', // type : list/rawlist/expand
		name: 'task',
		message: message,
		choices: taskList,
	};
	
	inquirer.prompt([type2]).then(function(answers){
		console.log('answers');
		console.log(answers);
	});
};