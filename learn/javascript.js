function main(){
	//str0();
	//floating();
	//esc();
	//boolean();
	//NUL();
	//DATE();
	//obj();
	//fn1();
	//obj1();
	//equalArray(a,b);
	//obj2();
	//u0();
	callee();
}


//对象的比较
function obj1(){
	var a = [];
	var b = a;
	b[0] = 1;
	a[0]
	if(a === b){
		console.log(true)
	} else {console.log(false)}
}


function u0(){
/*function obj2(){
	var a = ['a','b','c'];
	var b =[];
	for(var i = 0; i<a.length; i++){
		b[i] = a[i];
	};	
}*/
	
function equalArray (a,b){
    var a = ['a','b','c'];
	var b = ['b','a','c'];
		if (a.length !== b.length) return false;
		for(var i = 0; i < a.length; i++)
			if (a[i] !== b[i]) return false;
		return true;	
	}
console.log(equalArray());
}

//原始值不可变
function fn1() {
	var s = "hello";
	s.toUpperCase();
	console.log(s);
}

//包装对象是提取属性时的临时对象
function obj(){
	var s = 'test'
	s.len=4
	var t=s.len
	console.log (t);
}
//Date（）构造函数
function DATE(){
	var then =new Date(2011,0,1);
	var later =new Date(2011,0,1,17,10,30);
	var now =new Date();
	var elapsed = now - then;
	console.log(then)
	console.log(later)
	console.log(now)
	console.log(elapsed)
	console.log(later.getFullYear())
	console.log(later.getMonth())
	console.log(later.getDate())
	console.log(now.getDay())
	console.log(now.getHours())
	console.log(later.getUTCHours())
}
//空值NULL与undefined
function NUL() {
	if (null === undefined) {
	console.log(true)
    } else {
	console.log(false)
        }
   if (null == undefined) {
	console.log(true)
    } else {
	console.log(false)
        };
}
//字符串的一些方法
function str0(){
	var s = 'hello,world'
	console.log(
	s.charAt(0),
	s.charAt(s.length-1),
	s.substring(1,4),
	s.slice(1,4),
	s.slice(-3),
	s.indexOf('l'),
	s.lastIndexOf('l'),
	s.indexOf('l',3),
	s.split(','),
	s.replace('h','H'),
	s.toUpperCase(),
	s[0],
	s[s.length-1]
	);
}
//用三行代码显示一行的字符串
function str1(){console.log('uncom\
	                         for\
	                         table')}
//布尔值的假值
function boolean(){
	if (0 !==null){
		console.log('ture');
	} else {
		console.log(false);
	}
	if (0){
		console.log('ture');
	} else {
		console.log(false);
	}
}
//转义字符/
function esc(){
	console.log('\n','\v', '\f', '\r', '\"', '\'', '\\', '\x6A', '\u3334','\d');
}
//二进制浮点数不能精确表示0.1
function floating(){
	var x = 0.3-0.2;
	var y = 0.2-0.1;
	if (x == y) {
		console.log(true)
	} else {
		console.log(false)
	};
	if (x == 0.1) {
		console.log(true)
	} else {
		console.log(false)
	};
	if (y == 0.1) {
		console.log(true)
	} else {
		console.log(false)
	};
}


//再匿名函数中通过callee来递归的调用自身
function callee() {
	var facorial = function(x) {
		if (x <= 1) return 1;
		return x * arguments.callee(x-1);
	}
}

//主函数运行位置
main();

