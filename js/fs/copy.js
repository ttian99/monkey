//4、小文件拷贝
function smallcopy(){
	var fs=require('fs');
    function copy(src,dst) {
	    fs.writeFileSync(dst,fs.readFileSync(src));
    }//使用fs.readFileSync从源路径读取文件内容，并使用fs.writeFileSync将文件内容写入目标路径.
    function main(argv) {
	    copy("./test.js","../test.js");//copy(argv[0],argv[1]);
    }
    main(process.argv.slice(2));
    //process是一个全局变量，可通过process.argv获得命令行参数。
    //由于argv[0]固定等于NodeJS执行程序的绝对路径，argv[1]固定等于主模块的绝对路径，因此第一个命令行参数从argv[2]这个位置开始。
}

//5.大文件拷贝
function bigcopy(){
	var fs=require('fs');
    function copy (src,dst) {
	    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
	}//pipe方法把两个数据流连接了起来
    function main (argv){
	    copy("./test.js","..//test.js");//copy (argv[0],argv[1]);
	}
    main (process.argv.slice(2));
}


//7.数据流Stream
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
});
}