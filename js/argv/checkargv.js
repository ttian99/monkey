function checkargv(){
	if (process.argv.length<6)
	{
		console.log('输入参数不够')
	}
	else if (process.argv.length>6){
		console.log('含有空格的参数请加引号输入如"go home"')
	}
	else {
        return true;
	}
}



function main(argv){
    var y = checkargv();
    if (y == true) { 
       console.log('使命完成')
    }  else { console.log('程序有问题');return;}
}
main(process.argv);