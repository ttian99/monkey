/* 
 * @Author: Administrator
 * @Date:   2015-05-21 15:33:35
 * @Last Modified by:   Administrator
 * @Last Modified time: 2015-10-10 17:31:56
 */

'use strict';

//克隆数组
/**
 * 1、通过Array对象的concat方法。
 * 2、通过Array对象的slice方法。
 * 3、就是创建一个新数组，并遍历数组逐项添加到新数组中
 */
Array.prototype.clone = function() {
	return this.slice(0);
}
Array.prototype.clone2 = function() {
	return this.concat();
}
Array.prototype.clone3 = function() {
	var a = [];
	for (var i = 0, l = this.length; i < l; i++) a.push(this[i]);
	return a;
}



//最大值和最小值
//
// 这句代码的意思执行Math对象中的max函数，参数为values，并将返回结果赋值于max
// 其中apply 函数为JS的内置函数，作用为执行该函数。
// 且只能被函数调用。
// apply函数中的第一个参数为函数所属对象，通常为当前页面(this)。第二个参数为传入到函数中的参数数组（必须为数组）。
Array.prototype.max = function() { //最大值
	return Math.max.apply({}, this);
}
Array.prototype.min = function() { //最小值
	return Math.min.apply({}, this);
}



/**
*	按对象属性排列
*
*	数组是全部由对象组成，且对象都含有该属性，按某个对象的属性排列
*	默认升序排列
*	protStr [String] 属性名称
*	isDescend [Boolean] 是否降序排列
*/ 
Array.prototype.sortByProto = function(protoStr, isDescend) {
	this.sort(function(a, b) {
		var ret = null;
		var del = b[protoStr] - a[protoStr];
		ret = isDescend ? del : -del;
		return ret;
	});
	return this;
}

/**
* Array.prototype.map()
callback
原数组中的元素经过该方法后返回一个新的元素。
	currentValue
	callback 的第一个参数，数组中当前被传递的元素。
	index
	callback 的第二个参数，数组中当前被传递的元素的索引。
	array
	callback 的第三个参数，调用 map 方法的数组。
thisArg
执行 callback 函数时 this 指向的对象。

*/

/* roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9] */
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);


// sort() 方法用于对数组的元素进行排序
// 对数组的引用。请注意，数组在原数组上进行排序，不生成副本。
// arrayObject.sort(sortbyfunction)

/**
* 判断数组是否包含某个元素
*/
var arr = [1, 2, 3];
arr.indexOf(1); // 返回0
arr.indexOf(5); // 返回-1

/**
* 反转数组顺序
*/
arr.reverse();

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

console.log(isArray(arr));