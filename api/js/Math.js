
// 1.Math 没有构造函数 Math(),无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法

// 2.Math 属性
//  Math.E
//  Math.PI
//	Math.LN2
//	Math.LN10
//	Math.LOG2E
//	Math.LOG10E
//	Math.SQRT2
//	Math.SQRT1_2
	
// 3.Math 方法
// Math.random();
// 
// 


var arr = [1,2,3,4,5,5,6,7,8,8,98,12,];


Array.prototype.max = function() { //最大值
	return Math.max.apply({}, this);
	// 这句代码的意思执行Math对象中的max函数，参数为values，并将返回结果赋值于max
	// 其中apply 函数为JS的内置函数，作用为执行该函数。
	// 且只能被函数调用。
	// apply函数中的第一个参数为函数所属对象，通常为当前页面(this)。第二个参数为传入到函数中的参数数组（必须为数组）。
}

Array.prototype.max = function() { //最大值
	return Math.max.apply({}, this);
	// 这句代码的意思执行Math对象中的max函数，参数为values，并将返回结果赋值于max
	// 其中apply 函数为JS的内置函数，作用为执行该函数。
	// 且只能被函数调用。
	// apply函数中的第一个参数为函数所属对象，通常为当前页面(this)。第二个参数为传入到函数中的参数数组（必须为数组）。
}
