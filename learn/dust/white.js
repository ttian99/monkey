var rs=creatReadStream(pathname);

rs.on('data',function (chunk){
	doSomething(chunk);

});

rs.on('end',function (){
	cleanUp();
});




var rs=fs.creatReadStream(src);

rs.on('data',function (chunk){
	rs.pause();
	doSomething(chunk,function (){
		rs.resume();
	});
});

rs.on('end',function (){
	cleanUp();
});


var rs=fs.creatReadStream(src);
var ws=fs.creatWriteStream(dst);

rs.on('data',function (chunk)){
	ws.write(chunk);
});

rs.on('end',function(){
	ws.end();
});


var rs=fs.creatReadStream(src);
var ws=fs.creatWriteStream(dst);

rs.on('data',function (chunk){
	if (ws.writec(chunk) ===false){
		rs.pause();
	}
});

rs.on('end',function (){
	ws.end();
});

ws.on('drain',function (){
	rs.resume();
});




fs.readFile(pathname,function (err,data){
	if (err){
		//Deal with error.
	}  else {
		//Deal with data.
	}
});

try{
	var data =fs.readFileSync(pathname);
	//Deal with data.
} catch (err) {
	//Deal with error.
}


function factorial(n){
	if (n===1) {
		return 1;
	} else{
		return n*factorial(n-1);
	}
}

function travel (dir,callback) {
	fs.readdirSync(dir).forEach(function (readFile){
		var pathname= path.join(dir,file);

		if(fs.statSync(pathname).isDirectory()){
			travel(pathname,callback);
		} else {
			callback(pathname);
		}
	});
}





fs.statSync(pathname.isDirectory()){
	travel(pathname,callback);
}  else {
	callback(pathname);
}
});
}


function replace(pathname){
	var str=fs.readFIleSync(pathname,'binary');
	str=str.replace('foo','bar');
	fs.writeFileSync(pathname,str,'binary');
}
console.log(bar);



http.creatServer(function (request,response)
{
	var body=[];

	console.log(request.method);
	console.log(request.headers);

	request.on('data',function (chunk){
		body= Buffer.concat(body);
		console.log(body.toString());
	});
}).listen(80);



------------------------------------------
POST
{'user-agent':'curl/7.26.0',
 host:'localhost',
 acccept:'*/*',
 'content-length':'11',
 'content-type':'application/x-www-form-urlencoded'
}

Hello World




HTTP/ 1.1 200 OK
Content-Type:text/plain
Content-Length:11
Date:Tue,05 Nov 2013 05:31:38 GMT
Contention: keep-alive

Hello World



http.creatServer(function (request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	request.on('data',function (chunk){
		response.write(chunk);
	});
	request.on('end',function (){
		response.end();
	});
}).listen(80);


var options={
	hostname:'www.example.com',
	port:80,
	path:'/upload',
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded'}
};
var request= http.request(options,function (response){});

request.write("Hello World");
request.end();



http.get('http://www.example.com/',function (response){});


http.get('http://www.example.com/',function (response){
	var body=[];

	console.log(response.statusCode);
	console.log(response.headers);

	response.on('data',function (chunk){
		body.push(chunk);
	});
	response.on('end',function (){
		body=Buffer.concat(body);
		console.log(body.toSring());
	});
});

-------------------------------------------------------
200
{'content-type':'text/html',
  server:'Apache',
  'content-length':'801',
  data:'Tue, 05 Nov 2013 06:08:41 GMT',
  contention:'keep-alive'}
  <!DOCTYPE html>
  ...
}

var options={
	key:fs.readFileSync('./ssl/default.key'),
	cert:fs.readFileSync('./ssl/default.cer')
};

var server= https.creatServer(options,function (request,response){
	//....
});



server addContext('ff.com'),{
	key:fs.readFileSync('./ff.com.key'),
	cert:fs.readFileSync('./ff.com.cer')
}); 
server addContext('bar.com',{
	key:fs.readFileSync('./bar.com.key'),
	cert:fs.readFileSync('./bar.com.cer')
});


url.format({
	protocol:"http:",
	host:'www.example.com',
	pathname:'/p/a/t/h',
	serach:'query=string'
});
/*=>
'http://www.example.com/p/a/t/h?query=string'
*/





var fs=require('fs');
function copy (src,dst){
	fs.writeFileSync(dst,fs.readFileSync(src));
}
function main(argv){
copy (argv[0],argv[1])
}
 main(process.argv.slice(2));



 var fs=require('fs');
 function copy (src,dst){
 	fs.creatReadStream(src)pipe(fs.creatWriteStream(dst));
 }
 function main (argv){
 	copy(argv[0],argv[1]);
 }
main(process.argv.slice(2));
main(process.argv.slice(2));

var bin= new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);

bin.length
bin[4];
var str=bin.toString('utf-8');
var bin=new Buffer('Hello','utf-8');


var fs=require('fs');
 function copy (src,dst){
 	fs.writeFileSync(dst,fs.readFileSync(src));
 }
 function main (argv){
 	copy (argv[0],argv[1]);
 }
 main(process.argv.slice(2));


var fs=require('fs');
function copy (src,dst){
	fs.creatReadStream(src).pipe(fs.creatWriteStream(dst));
}
function main (argv){
	copy(argv[0],argv[1]);
}
main(process.argv.slice(2));

var str=bin.toString('utf-8');
var bin=new Buffer('hello','utf-8');

var bin=new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
var sub=bin.slice(2);

sub[0]=0x02;
console.log(bin);

var bin=new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
var sub=new Buffer(bin.length);
bin.copy(sub);
sub[0]=0x48;
console.log(bin);
console.log(sub);


var rs=fs.creatReadStream(src);
var wr=fs.creatWriteStream(dst);
rs.on('data',function (chunk){
	if (ws.write(chunk)===false) {
		rs.pause();
	};

});

rs.on('end',function (){
	ws.end();
});

ws.on('drain',function(){
	rs.resume();
})



fs.readFile(pathname,function (err,data){
	if (err) {
		//Deal with error.
	} else {
		//Deal with data.
	}
});

try {
	var data=fs.readFileSync(pathname);
	//Deal with data.
} catch (err) {
	//Deal with error.
}


var cache=[];

function store(key,value) {
	cache[path.normalize(key)]=value;
}

store('foo/bar',1);
store('foo//baz//../bar',2);
console.log(cache);