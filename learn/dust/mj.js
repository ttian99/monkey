/*
function hello(){
	console.log("Hello World!");
}
hello();
*/

/*
//counter.js提供一个共有方法count
var i=0;

function count(){
	return ++i;
}

export.count=(count);

//main.js主模块内容
var counter1=require('./counter.js');
var counter2=require('./counter.js');

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());*/
/*------console----------------------------------------
1
2
3*/


/*//smallcopy.js 小文件拷贝
var fs=require('fs');

function copy(src,dst){
	fs.writeFileSync(dst,fs.readFileSync(src));
}
function main(argv){
	copy(argv[0],argv[1]);
}
main(process.argv.slice(2));*/

/*//bigcopy.js大文件拷贝
var fs=require('fs');
function copy() {
	fs.createReadStream(src).pipe(fs.creatWriteStream(dst));
}
function main (argv){
	copy (argv[0],argv[1]);
}
main (process.argv.slice(2));*/


/*//Buffer 数据块，
var bin=new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
bin.length//=>5
bin[0]//=>0x68
var str=bin.toString('utf-8');
var bin=new Buffer('hello','utf-8');//<Buffer 68 65 6c 6c 6f>
bin[0]=0x48;

//.slice方法返回的Buffer修改会作用于原Buffer
var bin=new Buffer ([0x68,0x65,0x6c,0x6c,0x6f]);
var sub=bin.slice(2);

sub[0]=0x9c;
console.log(bin);//<Buffer 68 65 9c 6c 6f>


//拷贝Buffer,请求新的内存
var bin =new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
var dup= new Buffer(bin.length);

bin.copy(dup);
dup[0]=0x48;
console.log(bin);//=><Buffer 68 65 6c 6c 6f>
console.log(dup);//=><Buffer 48 65 6c 6c 6f>*/

/*var rs=fs.createReadStream(pathname);

rs.on('data',function(chunk){
	doSomething(chunk);
});

rs.on('end',function(){
	cleanUp();
});*/



/*
//只读数据流到只写数据流
var rs=fs.createReadStream(src);
var ws=fs.createWriteStream(dst);

rs.on('data',function(chunk){
	if (ws.write(chunk)===false) {
		rs.pause();
	}
});
rs.on('end', function (){
	ws.end();
});

ws.on('drain',function (){
	rs.resume();
});
*/




/*//File System文件系统
//异步模型
fs.readFile(pathname,function (err,data){
	if(err) {
		//Deal with error.
	} else {
		//Deal with data.
	}
});

//同步模型
try {
	var data=fs.readFileSync(pathname);
	//Deal with data.
} catch (err) {
	//Deal with err.
}
*/

/*//path.normalize转换为标准路径
var cache={};
var path=require('path');//=>定义path,必不可少
function store (key,value){
	cache[path.normalize(key)]=value;
}
store('foo/bar',1);
store('foo//baz//../bar',2);
console.log(cache);//=>{"foo/bar":2}
//path.join 拼接多个路径为标准路径
path.join('foo/','baz/','../bar');//=>"foo/bar"此句需单独调试
//不同文件扩展名
path.extname('hello.js')//=>".js"此举需单独调试*/


/*//同步遍历
var fs=require('fs');//提取内置fs对象
var path=require('path');
function travel(dir,callback){
	fs.readdirSync(dir).forEach(function (file){
		var pathname=path.join(dir,file);
	if (fs.statSync(pathname).isDirectory()) {
		travel(pathname,callback);
	} else{
		callback(pathname);
	}
	});
}
travel('./',function (pathname){//遍历相对当前目录下的所有文件目录
	console.log(pathname);
});



//异步遍历
var fs=require('fs');//提取内置fs对象
var path=require('path');
function travel(dir,callback,finish) {
	fs.readdir(dir,function (err,files){
		(function next(i){
			if (i<files.length){
				var pathname=path.join(dir,files[i]);

				fs.stat(pathname,function (err,stats){
					if(stats.isDirectory()){
						travel(pathname,callback,function (){
							next(i+1);
						});
					} else {
						callback(pathname,function (){
							next(i+1);
						});
					}
				});
			} else {
				finish&&finish();
			}
		}(0))
	});
}
travel('./',function (pathname){
	console.log(pathname);
});*/



//判断并且移除BOM
// bytes        Encoding
// ---------------------
// FE FF        UTF-16BE
// FF FE        UTF-16LE
// EF BB BF     UTF-8

/*function readText(pathname) {
	var bin=fs.readFileSync(pathname);

	if(bin[0]===0xEF&&bin[1]===0xBB&&bin[2]===0xBF){
		bin=bin.slice(3);
	}
	return bin.toString('utf-8');
}

//GBK转UTF-8，需借助iconv-lite三方包
var iconv=require('iconv-lite');

function readGBKText(pathname){
	var bin=fs.readFileSync(pathname);
    return iconv.decode(bin,'gbk');
}

//单字节编码
//NodeJS自带的binary编码
function replace(pathname){
	var str=fs.readFileSync(pathname,'binary');
	str=str.replace('foo','bar');
	fs.writeFileSync(pathname,str,'binary');
}
*/



/*var rs=fs.createReadStream(pathname);

rs.on('data',function (chunk){
	do doSomething(chunk);
});

rs.on('end',function (){
	cleanUp();
});

var rs=fs.createReadStream(src);
 rs.on('data',function (chunk){
 	rs.pause();
 	doSomething(chunk,function (){
 		rs.resume();
 	});
 });

rs.on('end',function (){
	cleanUp();
});



var rs=fs.createReadStream(src);
var ws=fs.createWriteStream(dst);

rs.on('data',funciton (chunk){
	if (ws.write(chunk)====false){
		rs.pause();
	}
});
rs.on('end',function(){
	ws.end();
});
ws.on('drain',function (){
	rs.resume();
});
*/

/*var fs=require('fs');

function copy(src,dst){
	fs.writeFileSync(dst,fs.readFileSync(src));
}
function main(argv){
	copy(argv[0],argv[1]);
}
main(process.argv.slice(2));

var fs=require('fs');

function copy(src,dst){
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv){
	copy(argv[0],argv[1]);
}

main(process.argv.slice(2));
*/


/*var bin=new Buffer('Hello','utf-8');
*/

/*var bin=new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
var dup=new Buffer(bin.length);
bin.copy(dup);
dup[0]=0x48;
console.log(bin);
console.log(dup);
*/

/*fs.readFile(pathname,function (err,data){
	if(err){
		//Deal with error.
	} else{
		//Deal with data.
	}
});


try {
	var data=fs.readFileSync(pathname);
	//Deal with data.
} catch (err){
	//Deal with error.
}

function store(key,value){
	cache[path.normalize(key)]=value;}

store('foo/bar',1);
store('foo//baz//../bar',2);
console.log(cache);//=>{'foo/bar':2}*/

/*
path.join('foo/','baz/','bar');//=>'foo/bar'

path.extname('foo/bar.js');//=>'.js'
*/

/*function factiorial(n) {
	if (n===1){
		return 1;
	} else{
		return n*factiorial (n-1);
	}
}


function travel(dir,callback) {
	fs.readdirSync(dir).forEach(function (file) {
		var pathname=path.join (dir,file);
	
	    if(fs.statSync(pathname).isDirectory()){
		    travel (pathname,callback);
	    } else {
		    callback(pathname);

	    }


	});
}*/
/*
fucntion readText(pathname){
	var bin=fs.readFileSync(pathname);

	if(bin[0]===0xEF&&bin[1]===0xBB&&bin[2]===0xBF){
		bin=bin.slice(3);
	}

	return bin.toString('utf-8');

}*/
/*
var iconv=require('iconv-lite');

function readGBKText(pathname){
	var bin=fs.readFileSync(pathname);
	return iconv.decode(bin,'gbk');
}
*/

/*function replace(pathname){
	var str=fs.readFileSync(pathname,'binary');
	str=str.replace('foo','bar');
	fs.writeFileSync(pathname,str,'binary');
}
*/
/*var http=require('http');

http.createServer(function (request,response){
	response.writeHead(200,{'Content-Type':'text-plain'});
	response.end('Hello World\n');
}).listen(80);
*/
/*
var option={
	key:fs.readFileSync('./default.key');
	cert:fs.readFileSync('./default.key');
};

var server=https.createServer(options,function (request,response){
	//....


*/

// http:..user:pass@host.com:8080/p/a/t/h?query=string#hash
//异步编程 回调
/*function heavyCompute (n,callback){
	var count=0,
	i,j;

    for (i=n;i>0;--i){
    	for(j=n;j>0;--j) {
    		count +=1;
    	}
    }

    callback(count);
}

heavyCompute(10000,function (count){
	console.log(count);
});

console.log('hello');*/

/*----console-----------
100000000
hello */
/* var arr=();
(function next (i,len,callback){
	if (i<len){
		async(arr[i],function (value){
			arr[i]=value;
			next(i+1,len,callback);
		});
	} else {
		callback();
	}
}(0,arr.length,function(){
	//All array items have processed.
}));*/

/*
setTimeout(function (){
	console.log('world');
},1000);

console.log('hello');
*/
/*-----CONSOLE-----------
hello
world
*/


/*
function heavyCompute(n){
	var count=0,
	    i,j;
	for (i=n;i>0;--i){
		for (j=n;j>0;--j) {
			count +=1; 
		}	
	}

var t=new Date();
console.log (t);

setTimeout(function () {
	console.log(new Date ()-t);
},1000);

heavyCompute(50000);
*/
// -----console-------------      -1158
// 8520



/*//代码设计模式
//函数返回值
//同步方式
var output=fn1(fn2,('input'));
//Do something.
//异步方式
fn2('input',function (output2){
	fn1(output2,function (output1){
		//Do something.
	});
});*/

/*//同步遍历
var arr=([0,5,2,4,5,7]);
var len=arr.length,
    i=0;
for (;i<len;++i){
	arr[i]=sync(arr[i]);
}
//All array items have processed*/

/*//异步串行遍历
(function next(i, len, callback) {
    if (i < len) {
        async(arr[i], function (value) {
            arr[i] = value;
            next(i + 1, len, callback);
        });
    } else {
        callback();
    }
}(0, arr.length, function () {
    // All array items have processed.
}));

//异步并行遍历
(function (i, len, count, callback) {
    for (; i < len; ++i) {
        (function (i) {
            async(arr[i], function (value) {
                arr[i] = value;
                if (++count === len) {
                    callback();
                }
            });
        }(i));
    }
}(0, arr.length, 0, function () {
    // All array items have processed.
}));
*/


//异常处理同步方式
/*function sync(fn){
	return fn();
}

try {
	sync(null);
	//Do something.
} catch (err) {
	console.log('Error:%s',err.message);
}
console.log (sync);*/
/*---------console----------------------------
Error:object is not a function
*/

/*//异常处理异步方式()
function async(fn,callback) {
	//code execution path breaks here.
	setTimeout(function () {
		callback(fn());
	},0);
}

try {
	async (null,function (data){
		//Do something.
	});
} catch (err) {
	console.log ('Error:%s',err.message);
}*/


/*----------------console-------------------
/home/user/test.js:4
          callback(fn());

TypeError:object is not a function
    at null._onTimeout (/home/user/test.js:4:13)
    at Timer.listOnTimeout[as ontimeout] (timers.js:110:15)
*/

/*function async(fn,callback) {
	//Code execution path breaks here.
	setTimeout(function (){
		try {
			callback(null,fn());
		} catch(err) {
			callback(err);
		}
	},0);
}

async(null,function (err,data){
	if (err) {
		console.log('Error:%s',err.message);
	} else {
		//Do something.
	}
});*/

/*--------console---------------------
Error:object is not a function*/

//同步方式代码设计
/*function main(){
	//Do something.
	syncA();
	//Do something.
	syncB();
	//Do something.
	syncC();
}


try {
	main();
} catch (err) {
	//Deal with exception.
}*/


//异步方式代码设计
/*function main (callback){

	//Do something.
	asyncA(fucntion (err,data){
		if (err) {
			callback(err);
		} else {
			//Do something
			asyncB(function (err,data){
				if (err) {
					callback(err);
				} else {
					//Do something
					asyncC(function (err,data){
						if(err){
							callback(err);
						} else {
							//Do something
							callback(null);
						}
					});
				}
			});
		}
	});
}

main(function (err){
	if (err) {
		//Deal with exception.
	}
});*/


//域
//NodeJS通过process对象捕获全局异常
/*process.on('uncaughtException',function (err){
	console.log('Error:%s',err.message);
});
setTimeout(function (fn){
	fn();
});*/

/*---------Console-----------------
Error:undefined is not a function*/
// 异步回调函数传递异常方案
/*function async(request,callback) {
	//Do something.
	asyncA(request,function (data){
		//Do something
		asyncB(request,function (data){ 
			//Do something
			asyncC(request,function (data){
				//Do something
				callback(data);
			});
		});
	});
}
var http=require('http');
http.createServer(function (request,response){
	var d=domain.create();

	d.on('error',function (){
		response.writeHead(500);
		response.end();
	});
	d.run (function (){
		async(request,function (data){
			response.writeHead(200);
			response.end(data);
		});
	});
});*/
//domain模块创建一个字域，通过子域对象的error事件统一捕获异常。
/*function async(request,callback) {
	// Do something.
	asyncA(request,function (data){
		//Do something
		asyncB(request,function (data){
			//Do something
			asyncC(request,function (data){
				//Do something
				callback(data);
			}) ;
		});
	});
}
http.createServer(function (request,response){
	var d=domain.creat();
	d.on('error',function(){
		response.writeHead(500);
		response.end();
	});
	d.run(function (){
		async(request,function (data){
			response.writeHead(200);
			response.end(data);
		});
	});
});*/


//21.大示例
//第一次迭代（实现服务器基本需求功能）
console.log(process.argv[0]);

var fs=require('fs'),
    http=require('http'),
    path=require('path');

var MIME={
	'.css':'text/css',
	'.js':'application/javascript'
};
function combineFiles(pathnames,callback) {
	var output=[];
	(function next(i,len){
		if(i<len){
			fs.readFile(pathnames[i],function (err,data){
				if(err){
					callback(err);
				} else {
					output.push(data);
					next(i+1,len);
				}
			});
		} else {
			callback(null,Buffer.concat(output));
		}
	}(0,pathnames.length));
}
function main(argv) {
	var config=JSON.parse(fs.readFileSync(argv[0],'utf-8')),
	    root=config.root||'.',
	    port=config.port||80;
	http.createServer(function (request,response){
		var urlInfo=parseURL(root,request.url);
		combineFiles(urlInfo.pathnames,function (err,data){
			if (err){
				response.writeHead(404);
				response.end(err.message);
			} else {
				response.writeHead(200,{
					'Content-Type':urlInfo.mime
				});
				response.end(data);
			}
		});
	}).listen(port);
}

function parseURL(root,url) {
	var base,pathnames,parts;
	if(url.indexOf('??')===-1){
		url=url.replace('/','/??');
	}
	parts=url.split('??');
	base=parts[0];
	pathnames=parts[1].split(',').map(function (value){
		return path.join(root,base,value);
	});
	return {
		mime:MIME[path.extname(pathnames[0])]||'text/plain',
		pathnames:pathnames
	};
}
main('xx.js');


//第二次迭代（把响应输出时机提前至读取第一个文件的时刻）
/*function main(argv) {
	var config=JSON.parse(fs.readFileSync(argv[0],'utf-8')),
	root=config.root||'.',
    port=config.port||80;

    http.createServer(function (request,response){
    	var urlInfo= parseURL(root,request.url);

    	validateFiles(urlInfo.pathnames,function (err,pathnames){
    		if (err){
    			response.writeHead(404);
    			response.end(err.message);
    		} else {
    			response.writeHead(200,{
    				'Content-Type':urlInfo.mime
    			});
    			outputFiles(pathnames,response);
    		}
       });  
    }).listen(port);
}
function outputFiles(pathnames,writer){
	(function next(i,len){
		if (i<len) {
			var reader=fs.createReadStream(pathnames[i]);
			reader.pipe(writer,[end:false]);
			reader.on('end',function(){
				next (i+1,len);
			});
		} else {
			write.end();
		}
	}(0,pathnames.length));
}
function validateFiles(pathnames,callback){
	(function next(i,len){
		if(i<len){
			fs.stat(pathnames[i],function (err,stats){
				if(err){
					callback(err);
				} else if (!stas.isFile()){
					callback(new Error());
				} else{
					next(i+1,len);
				}
			});
		} else {
			callback(null,pathnames);
		}
	}(0,pathnames.length));
}
*/

//守护进程（daemon.js)
/*var cp=require('child_process');
var worker;
function spawn(server,config){
	worker=cp.spawn('node',[server,config]);
	worker.on('exit',function (code){
		if(code!==0){
			spawn(server,config);
		}
	});
}
function main (argv){
	spwan('server.js',argv[0]);
	process.on('SIGTERM',function() {
		worker.kill();
		process.exit(0);
	});
}
main(process.argv.slice(2));*/
//服务器本身的入口函数也要做如下调整
/*function main(argv) {
	var config= JSON.parse(fs.readFileSync(argv[0],'utf-8')),
	root =config.root||'.',
	port=config.port||80,
	server;
	server=http.createServer(function(request,response) {
		...
	}).listen(port);
	process.on('SIGTERM',function (){
		server.close(function(){
			process.exit(0):
		});
	});
}*/

// 第四次迭代
/*------start.sh---------
#!/bin/sh
if [! -f 'pid']
then
    node../lib/daemon.js../conf/config.json&
    echo $!>pid
fi
-------killws.sh---------
#!/bin/sh
if[-f "pid"]
then
     kill $(tr -d '\r\n' <pid)
     rm pid
fi*/
















