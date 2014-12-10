/*function obj2(){
	var a = ['a','b','c'];
	var b =[];
	for(var i = 0; i<a.length; i++){
		b[i] = a[i];
	};	
}*/




//??
/*	var a = ['a','b','c'];
	var b = ['b','a','c'];
function equalArray (a,b){
    t = return
		if (a.length != b.length,console.log(a,b)) return false 

        console.log(t);

		for(var i = 0; i < a.length; i++)
			if (a[i] !== b[i])  return false;
		return true;
		console.log(t);
	}
equalArray(a,b);
*/




//
/*function tra(){

}
tra();*/


/*function tot(){
	var a,b,c,n = 17;
	a = binary_string = n.toString(2) ;
	b = octal_string = '0' + n.toString(8) ;
	c = hex_string = '0x' + n.toString(16);
	console.log(a,b,c);
}
tot();*/

/*function g1(){
	var n = 123456.789;
	var a = n.toFixed(0)
	;
	console.log(y);
}
g1();*/

/*console.log(
	parseInt('3$#$$#%'),
	parseFloat('-3.13skdSSdsfsjfieg'),
	parseInt('-3.13skdjfieg'),
	parseFloat('0x12'),
    parseInt('0xFa'),
    parseInt('35',4),
    parseInt('083',8));
*/
/*
console.log(({x:1,y:2}).toString())//=>'[Object Object]'

console.log([1,2,3].toString());
console.log((function (x) { f(x);}).toString());
console.log(/\d+/g.toString());
console.log(new Date(2010,0,1).toString())
*/
/*var d = new Date(2010,0,1);
console.log(d.valueOf());

var now =new Date();

console.log(typeof (now + 1),(now + 1));
console.log(typeof (now - 1),(now - 1));
console.log(now == now.toString());
console.log(now > (now - 1));*/
/*
var o = ['2','3434','3435555345']
for(var p in o) console.log(p);*/

/*var scope = 'global';
function checkscope() {
	var scope = 'local';
	console.log(scope);
	return scope;
}
checkscope();
console.log(scope);*/


/*var scope = 'global scope';
function checkscope() {
	var scope = 'local scope';
	function nested() {
		var scope = 'nested scope';
		return scope;
	}
	return nested();
}
checkscope ();*/


/*function test (o) {
	var i = 0;
	if (typeof o == "object") {
		var j = 0;
		for(var k = 0; k < 10; k++){
			console.log(k);
		}
		console.log(k);
	}
	console.log(j);
}
test();
*/


/*var scope = 'global';
function f() {
	console.log(scope);
	var scope = 'local';
	console.log(scope);
}
f();

var truevar = 1;
fakevar = 2;
this.fakevar2 = 3;
delete truevar
delete fakevar
delete this.fakevar2

call object*/
/*i = j =1;
k = 2;

if (i == j)
	if (j == k)
		console.log("i equals k");
else 
		console.log("i does't equal j");*/

/*var n = 2;
if (n == 1) {
	console.log('n == 1');
} else if (n == 2) {


*/
/*var a={ x:2,y:4 }
console.log(a["x"]);

a['z']=3;
a.u=4;
console.log(a.u);
console.log(a.z);

delete a.u;
console.log('u' in a);

console.log(a);
var t=JSON.stringify(a);
console.log(t);
var x=t;
x=JSON.parse(t);
console.log(x);*/

/*var fs=require('fs');
fs.readFileSync("d", 'utf-8');*/



/*var o = { 
    data_prop: value,
    get accessor_prop(value){},
    set accessor_prop(value){}};
*/

/*object.defineProperty(Object.protptype,"extend",

    {
      writable:true,
      enumerable:false,
      cnfigurable:true,
      value: function (o){
      	var names =Object.getOwnPropertyNames(o);
      	for(var i=0; i<names.length;i++) {
      		if (names[i] in this) continue;
      		var desc = Object.get own PropertyDescriptor(o,names[i]);
      		Object.defieProperty(this,names[i],desc);
      	}
      }
});

*/

/*var o = Object.seal(Object.creat(Object.freeze({x:1},y: {value: 2,writable: true})));
*/

/*var s = { x:1,y:1 }.toString;
console.log (s);*/

/*
var a1=[,,,];
var a2=new Array(2);
console.log(0 in a1);
console.log(0 in a2);*/
/*
a = ["yaho"]
a[1]="13skdSSdsfsjfieg";
a.push('hello','good');
a.unshift('00.1');
delete a[1];
console.log(1 in a);
console.log(a.length);
console.log(a.shift());
console.log(a.pop());
console.log(a);
*/

/*for (var i in a) {
	if (!a.hasOwnProperty(i)) continuue;
}
for (var i in a) {
	if (String(Math.floor(Math.abs(Number(i))))!== i) continue;
}

*/

/*var data = [1,2,3,4,5];
var sumOfSquares = 0;
data.forEach(function (x) {
	sumOfSquares += x*x;
});
sumOfSquares*/


/*var table=new Array(10);
for (var i=0;i<table.length;i++)
	table[i] =new Array(10);
for (var row=0;row<table.length;row++){
	for(col=0;col<table[row].length;col++){
		table[row][col] = row*col;
	}
}
var t=table[8][7];
console.log(t);
*/

/*var a=[1,2,3,4,5,6,7];
var b
b=a.join("-");
console.log(b);*/

/*var a = [88,441,555,1111,7];
b=a.sort();
a.sort(function(a,b){
	return a - b;
});
console.log(a.sort(function(a,b) {return b-a}));
console.log(a+"\n"+b);

*/


/*var a =[1,2,3,4];
l=a.concat(5,'b');
m=a.concat([5,2]);
n=a.concat([23,43],['abd','ccc']);
o=a.concat(9,[5,[6,['a',7]]]);
console.log(l);
console.log(m);
console.log(n);
console.log(o);*/


/*var a=[1,2,3,5,7];
t=a.slice(-3,-2);
console.log(t);*/

/*var a=[1,2,3,4,5,6,7,8];
t = a.splice(3,2);
console.log(a);
console.log(t);
m = a.splice(3,0,4,5,6);
console.log(a);
console.log(m);
*/

/*var stack = [];
t = stack.push(1,2);
console.log(stack);
stack.pop();
console.log(stack);
console.log(t);
console.log(stack.pop());
*/

/*var data = [1,2,3,4,5];
var sum = 0;
data.forEach(function(value){ sum += value; });
console.log(sum);
data.forEach(function(v, i, a) { a[i] = v + 1; });
console.log(data);*/

/*function foreach(a,f,t) {
	try { a.forEach(f,t);}
	catch(e) {
		if(e === foreach.break) return;
		else throw e;
	}
}
foreach.break = new Error('StopIteration');
*/

/*var a = [1,2,4,5];
b = a.map(function(x) { var t; t=x+x; return t;

});
console.log(b);
*/

/*a = [5,4,,,,,5,67,null,89,undefined,3,];
 small = a.filter(function (x) {return x <5});
 console.log(small);
 eve = a.filter(function (x,i) { return i%2 == 0});
console.log(eve);
var dense = a.filter(function() { return true; });
console.log(a);
a=a.filter(function (x) { return x !== undefined && x != null;});
console.log(a);
*/

/*var a=[1,2,3,4,5,6,7,8];
x=a.some(function (x) { return x<2;});
console.log(x);
y=a.some(isNaN);
console.log(y);
*/


/*var a = [1,2,4,5];
//var sum = a.reduce(function (x,y,z,w) {console.log(x,y,z,w,x+y);return x+y+z+w },0);
//console.log(sum);
//console.log("-----------------------------------");
// var product = a.reduce(function (x,y){console.log(x,y,x*y);return x*y},1);
// console.log(product);
var max = a.reduce (function (x,y) {
return (x>y?x:y)});
console.log(max);*/
/*
var a=[2,3,4]
var big = a.reduceRight(function(accumulator,value){
	return Math.pow(value,accumulator);
});
console.log(big);*/
    
/*function findall(a,x){
	var a=['a','x','x','x'],
	    results = [],
	    len = a.length,
	    pos = 0;
	while(pos<len){
		pos = a.indexOf("x",pos);
		if (pos === -1) break;
		results.push(pos);
		pos = pos + 1;
	}
	console.log(results);
	return results;
}
findall();
*/

/*function isArrayLike(o) {
	var o = {1,2,3,4,5};
	if (o &&
		typeof o === "object" &&
		isFinite(o.length)&&
		o.length >= o &&
		o.length === Math.floor(o.length)&&
		o.length < 4294967296)
		return true;
	else
		return false;
}
console.log(isArrayLike());
*/
/*
var a ={"0":"a","1":"b","2":"c",length:3};
Array.prototype.join.call(a,"+")
Array.prototype.join.call(a,0)
Array.prototype.map.call(a,function(x) {
	return x.toUpperCase();
})

var a ={""}*/

/*s="JavaScript"
t=Array.prototype.join.call(s,function(x){
	return x.match(/[^aeiou]/);
}).join("")
console.log(t);*/

/*
var a1 = [,,,];
var a2 = new Array(3);
console.log(0 in a1);
console.log(0 in a2);*/


/*var o = {
	m: function() {
		var self = this;
		console.log(this === 0);
		f();

		function f() {
			console.log(this === 0);
			console.log(self === 0);
		}
	}
};
o.m();

*/

/*function f (x,y,z)
{
	//首先，验证传入的实参个数是否正确
	if (arguments.length !=3){
		throw new Error ('function f called with' + arguments.length +'arguments,but it expects 3 arguments.');
    }
    //再执行函数的其他逻辑
}



function max () {
	var max =Number.NEGATIVE_INFINITY;
}*/

/*function f(x) {
	var x=[];
	console.log(x);
	arguments[0] = null;
	console.log(x);
}
f();
*/

/*var scope = 'global scope';
function checkscope() {
	var scope = "local scope";
	function f() { return scope;}
}
console.log(checkscope()());
*/

/*function Car(color,door) {
	var ocar = new Object;
	ocar.color = color;
	ocar.door = door;
	ocar.showColor = function() {
		document.write(this.color)
	};
return ocar;
}
var car1 = Car('red',4);
var car2 = Car('blue',4);
car1.showColor()//output.'red'
car2.showColor()//output.'blue'
*/

/*const pi = 3.14;
//pi = 4;
//const pi = 4;
var pi = 4;
console.log(pi);*/
/*
let x=1, y=2;
let (x=x+1,y=x+2){
	console.log(x+y);
};
console.log(x+y);

let [r.theta]=polar(1.0,1.0);
let [x,y] =cartesia(r,theta);
*/

/*
let ({name:feature,impl:[{engine:impl1,version:v1},{engine:impl2}]}=data){
	console.log(feature);
	console.log(impl1);
	console.log(v1);
	console.log(impl2);
}

var atomicNumber = pt.element[1].@id;
for each (var e in pt.element){
	console.log(e.name);
}
for each (var n in pt.element.@*)console.log(n);


var o = {one: 1, two: 2, three: 3}
for(var p in o) console.log(p);//for/in输出'one','two','three'
for each (var v in o) console.log(v);//for/each 输出1~3

function counter(start) {
	let nextValue
}
*/

emitter.on(name,f)
emitter.addListener(name,f)
emitter.once(name,f)
emitter.listeners(name,f)
emitter.removeListener(name,f)
emitter.removeAllListeners(name)


var net = require('net');
var server = net.createServer();
server.listener(2000,function() {console.log("listeneronport 2000");})
server.on("connection",function(stream) {
	console.log("Accepting connection from",stream.remoteAddresss);
	
})


