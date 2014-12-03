function main(){
	hello();
}





//1.hello world
//function hello() {
	console.log("Hello World!");
	//h();
//}



//2.主模块完整示例
/*提供一个共有方法count(counter.js)
var i=0;
function count(){
	return ++i;
}
export.count=(count);
//主模块内容(main.js)
var counter1=require('./counter.js');
var counter2=require('./counter.js');

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());*/


/*//3.文件拷贝
//小文件拷贝
var fs=require('fs');
function copy(src,dst) {
	fs.writeFileSync(dst,fs.readFileSync(src));
}
function main(argv) {
	copy(argv[0],argv[1]);
}
main(process.argv.slice(2));
//大文件拷贝
var fs=require('fs');
function copy (src,dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main (argv){
	copy (argv[0],argv[1]);
}
main (process.argv.slice(2));*/


/*//4.数据块Buffer
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
console.log(dup);//=><Buffer 48 65 6c 6c 6f>
*/


/*// 5.数据流Stream
//大文件拷贝创建一只只读数据流
var rs=fs.creatReadStream(pathname);
rs.on('data',function (chunk)){
	doSomething(chunk);
});
rs.on('end',function ()){
	cleanUp（）；
}）；
//给doSomething函数加入回调
var rs=fs.creatReadStream(src);

rs.on('data',function (chunk){
	rs.pause();
	doSomething(chunk,function (){
		rs.resume();
	});
});
rs.on('end',function()){
	cleanUp（）；
});
//创建只写数据流
var rs=fs.creatReadStream(src);
var ws=fs.creatWriteStream(dst);
rs.on('data',function (chunk){
	ws.write(chunk);
});
rs.on('end'),function（）{
	ws.end();
});
//只读数据流到只写数据流的搬运====>.pipe
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
});*/


/*//6.文件系统File System
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


/*//7.路径操作
//path.normalize转换为标准路径
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


/*//8.遍历目录
//递归算法
function factorial(n){
    if(n===1) {
        return 1;
    } else {
        return n*factorial (n-1);
    }
}
//同步遍历
var fs=require('fs')
var path=require('path')
function travel (dir,callback){	
	fs.readdirSync(dir).forEach(function (file){
		var pathname=path.join(dir,file);
	if(fs.statSync(pathname).isDirectory()){
		travel(pathname,callback);
	}else {
		callback(pathname);
	}
	})
}
travel('../cat',function (pathname){
	console.log(pathname);
});
//异步遍历
function travel(dir, callback, finish) {
    fs.readdir(dir, function (err, files) {
        (function next(i) {
            if (i < files.length) {
                var pathname = path.join(dir, files[i]);

                fs.stat(pathname, function (err, stats) {
                    if (stats.isDirectory()) {
                        travel(pathname, callback, function () {
                            next(i + 1);
                        });
                    } else {
                        callback(pathname, function () {
                            next(i + 1);
                        });
                    }
                });
            } else {
                finish && finish();
            }
        }(0));
    });
}*/


/*//9.文本编码
//判断并且移除BOM
// bytes        Encoding
// ----------------------
// FE FF        UTF-16BE
// FF FE        UTF-16LE
// EF BB BF     UTF-8
function readText(pathname) {
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
//单字节编码（NodeJS自带的binary编码）
function replace(pathname){
	var str=fs.readFileSync(pathname,'binary');
	str=str.replace('foo','bar');
	fs.writeFileSync(pathname,str,'binary');
}*/


//10.网络操作
//A、服务端模式（创建一个HTTP服务器，监听HTTP客户端请求并返回响应）。
//创建一个HTTP服务器（打开浏览器http://127.0.0.1:8124/就能看效果）
/*var http=require('http');
http.createServer(function (request,response){
	response.writeHead(200,{'Content-Type':'text-plain'});
	response.end('Hello World\n');
}).listen(8124);*/
//完整的http请求（本质是一个数据流，请求头headers和请求体body）
/*POST/HTTP/1.1
User-Agent:curl/7.26.0
Host:localhost
Accept:
Content-Type:application/x-www-form-urlencoded

Hello World*/
//把request对象当作一个只读数据流来访问请求体数据
/*http.createServer(function (request,response){
	var body=[];
	console.log(request.method);
	console.log(request.headers);
	request.on('data',function (chunk){
		body.push(chunk);
	});
	request.on('end',function (){
		body=Buffer.concat(body);
		console.log(body.toString());
	});
}).listen(80);
-------------------------------------------
POST
{'User-Agent':'curl/7.26.0',
 host:'localhost',
 accept:'',
 'content-length':'11',
 'content-type':'application/x-www-form-urlencoded' }
 Hello World*/
//完整的http响应（本质是一个数据流，响应头headers和响应体body）
/*HTTP/1.1 200 OK
Content-Type:text/text-plain
Content-Length:11
Date:Tue,05 Nov 2013 05:31:38 GMT
Connection:keep-alive

Hello World*/
//B、客户端模式（发起一个HTTP客户端请求，获取服务器端响应）
//1、request方法创建了一个客户端，并指定请求目标和请求头数据
/*var options={
	hostname:'www.example.com',
	port:80,
	path:'/upload',
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded'
	}
};
varrequest=http.request(options,function (response) {});
request.write('Hello World');
request.end();*/
//由于HTTP请求中GET请求是最常见的一种，并且不需要请求体，因此http模块也提供了以下便捷API。
/*http.get('http://www.example.com/',function (response) {});*/
//把response对象当作一个只读数据流来访问响应体数据
/*http.get('http.//www.example.com/',function (response){
	var body=[];
	console.log(response.statusCode);
	console.log(response.headers);
	response.on('data',function (chunk){
		body.push(chunk);
	});
	response.on('data'function (chunk) {
		body.push(chunk);
	});
	response.on('end',function(){
		body.push(chunk);
	});
});
-----------------------------------------
200
{'content-type':'text/html',
  server:'Apache',
  'content-length':'801',
  data:'Tue, 05 Nov 2013 06:08:41 GMT',
  connection:'keep-alive'}
<!DOCTYPE html>
...*/


//11、HTTPS模块
// 服务端模式
//创建一个HTTPS服务器
/*var options={
	key:fs.readFileSync('./ssl/default.key'),
	cert:fs.readFileSync('./ssl/default.cer')
};
var server=https.createServer(options,function (request,response){
	//...
});*/
//SNI技术，为HTTPS服务器添加多组证书。
/*server.addContext('foo.com',{
	key:fs.readFileSync('./ssl/foo.com.key'),
	cert:fs.readFileSync('./ssl/foo.com.cer')
});
server.addContext('bar.com',{
	key:fs.readFileSync('./ssl/bar.com.key'),
	cert:fs.readFileSync('./ssl/bar,com.cer')
});*/
//客户端模式
//发起一个HTTPS客户端请求
/*var options={
	hostname:'www.example.com',
	port:443,
	path:'/',
	method:'GET'
};
var request=https.request(options,function (request){});
request.end();*/


//12.URL模块
//.prase模块将一个URL字符串转换为URL对象
/*url.parse('http.//user:pass@host.com:8080/p/a/t/h?query=string#hash');
*//*=>
{	protocol:'http:',
	auth:'user:pass',
	host:'host.com:8080',
	port:'8080'
	hostname:'host.com',
	hash:'#hash',
	search:'?query=string',
	query:'query=string',
	pathname:'/p/a/t/h',
	path:'/p/a/t/h?query=string',
	href:'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'}
*/
//传给.parse方法的不一定要是一个完整的URL
/*http.createServer(function (request, response) {
    var tmp = request.url; // => "/foo/bar?a=b"
    url.parse(tmp);
     =>
    { protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: '?a=b',
      query: 'a=b',
      pathname: '/foo/bar',
      path: '/foo/bar?a=b',
      href: '/foo/bar?a=b' }
    
}).listen(80);*/
//.format方法允许将一个URL对象转换为URL字符串
/*url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});*/
/* =>
'http://www.example.com/p/a/t/h?query=string'
*/
//.resolve方法可以用于拼接URL
/*url.resolve('http://www.example.com/foo/bar','../baz');
=>
http://www.example.com/baz
*/


//13.querystring模块（用于URL参数字符串与参数对象的互相转换）
/*querystring.parse('foo=bar&baz=qux&baz=quux&corge');
=>
{foo:'bar',baz:['qux','quux'],corge:''}
querystring.stringify({foo:'bar',baz:['qux','quux'],corge:''});
=>
'foo=bar&baz=qux&baz&quux&corge='*/


//14.Zlib模块（提供了数据的压缩和解压缩功能）
//使用zlib模块压缩HTTP响应体数据(判断了客户端是否支持gzip，并在支持的情况下使用zlib模块返回gzip之后的响应体数据)
/*http.createServer(function (request,response){
	var i=1024,
	    data='';
	while (i--){
		data+='.';
	}
	if ((request.headers['accept-encoding']||'').indexOf('gzip')!==-1) {
		zlib.gzip(data,function (err,data){
			response.writeHead(200,{
				'Content-Type':'text/plain',
				'Content-Encoding':'gzip'
			});
			response.end(data);
		});
	} else {
		response.writeHead(200, {
			'Content-Type':'text/plain'
		});
		response.end(data);
	}
}).listen(80);
*/
//使用zlib模块解压HTTP响应体数据(判断了服务端响应是否使用gzip压缩，并在压缩的情况下使用zlib模块解压响应体数据。)
/*var options = {
        hostname: 'www.example.com',
        port: 80,
        path: '/',
        method: 'GET',
        headers: {
            'Accept-Encoding': 'gzip, deflate'
        }
    };

http.request(options, function (response) {
    var body = [];

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);

        if (response.headers['content-encoding'] === 'gzip') {
            zlib.gunzip(body, function (err, data) {
                console.log(data.toString());
            });
        } else {
            console.log(data.toString());
        }
    });
}).end();*/

//15.NET模块（创建Socket服务器或Socket客户端）
//使用Socket搭建一个很不严谨的HTTP服务器
/*net.createServer(function (conn) {
    conn.on('data', function (data) {
        conn.write([
            'HTTP/1.1 200 OK',
            'Content-Type: text/plain',
            'Content-Length: 11',
            '',
            'Hello World'
        ].join('\n'));
    });
}).listen(80);*/
//使用Socket发起HTTP客户端请求
/*var options = {
        port: 80,
        host: 'www.example.com'
    };

var client = net.connect(options, function () {
        client.write([
            'GET / HTTP/1.1',
            'User-Agent: curl/7.26.0',
            'Host: www.baidu.com',
            'Accept: /',
            '',
            ''
        ].join('\n'));
    });

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});*/




//16.进程管理
//用NodeJS调用终端命令来简化目录拷贝
/*var child_process=require('child_process');
var util=require('util');
function copy(source,target,callback){
	child_process.exec(
		util.format('cp -s %s*',source,target),callback);
}
copy('a','b',function (err){
	//...
});*/
//通过process.argv获取命令行参数
/*function main(argv){
	//...
}
main(process.argv.slice(2));*/
//如何退出程序
/*try{
	//...
} catch (err) {
	//...
	process.exit(1);
}*/
//如何控制输入输出（stdin/stdout/stderr)
/*function log(){
	process.stdout.write(
		util.format.apply(util,arguments)+'\n');
}*/
//如何降权（linux1024以下端口）
/*http.createServer(callback).listen(80,function(){
	var env=process.env,
	    uid=parseInt(env['SUDO_UID']||process.getuid(),10),
	    gid=parseInt(env['SUDO_UID']||process.getgid(),10);
    process.setgid(gid);
    process.setuid(uid);
});*/
//如何创建子进程.spawn(exec,args,options)
/*var child=child_process.spawn('node',['xxx.js']);
child.stdout.on('data',function (data){
	console.log('stdout:'+data);
});
child.stderr.on('data',function(data){
	console.log('stderr:'+data);
});
child.on('close',function (code){
	console.log('child process exited with code' +code);
});*/
//进程之间通讯（linux系统下，进程之间可以通过信号互相通信。）
/*//parent.js
var child=child_process.spawn('node',['child.js']);
child.kill('SIGTERM');
//child.js
process.on('SIGTERM',function(){
	cleanUp();
	process.exit(0);
});*/
//父子进程都是NodeJS，可以通过IPC双向传递数据
//parent.js
/*var child=child_process.spawn('node',['child.js'],{
	stdio:[0,1,2,'ipc']
});
child.on('message',function (msg){
	console.log(msg);
});
child.send({hello:'hello'});
//child.js
process.on('message',function (msg){
	msg.hello=msg.hello.toUpperCase();
	process.send(msg);
});*/
//如何守护子进程
//daemon.js
/*function spawn(mainModule){
	var worker=child_process.spawn('node',[mainModule]);
	worker.on('exit',function(code){
		if(code!==0){
			spawn(mainModule);
		}
	});
}
spawn('worker.js');*/


//17.异步编程
//有回调函数，但是没有执行异步
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
console.log('hello');
*/
/*----console-----------
100000000
hellp*/
//异步执行
/*setTimeout(function (){
	console.log('world');
},1000);
console.log('hello');*/
/*-----CONSOLE-----------
hello
world*/
//异步编程回调函数在1秒后没有立即被调用，而是等js主线程序空闲
/*function heavyCompute(n){
	var count=0,
	    i,j;
	for (i=n;i>0;--i){
		for (j=n;j>0;--j) {
			count +=1;
		}
	}
}
var t=new Date();
setTimeout(function () {
	console.log(new Date ()-t);
},1000);
heavyCompute(50000);
-----console-------------
8520*/
//A函数返回值
//同步模式
/*var output=fn1(fn2,('input'));
    //Dosomthing.
//异步模式（返回回调函数）
fn2('input',function (output2){
	fn1(output2,function (output1){
		//Do something.
	});
});*/
//B遍历数组
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


//19.异常处理
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
Error:object is not a function*/
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
    at Timer.listOnTimeout[as ontimeout] (timers.js:110:15)*/

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


// 20.域(domain)
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




//-------------------------主函数运行位置----------------------------------------
main();