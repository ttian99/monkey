/* parent.js */
var child_process = require('child_process');
var vers = "1.1.1";
var part = "cmcc"
var child =child_process.spawn('node',['child.js',vers,part],{
	stdio:[0,1,2,'ipc']
});
child.on('message',function (msg) {
	if (msg.hello == 0){
		console.log('i no');
	}
	else {console.log(msg);
	}
});
child.send({ hello: 'hello' });

