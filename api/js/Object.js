/* 
* @Author: Administrator
* @Date:   2015-10-15 20:12:47
* @Last Modified by:   Administrator
* @Last Modified time: 2015-10-15 20:13:07
*/

'use strict';

var json = {ha: false, hb:0};

Object.prototype.hasKey = function(str){
	var ret;
	// 方法1
	// ret = str in json;
	// 方法2
	ret = this.hasOwnProperty(str);

	if (ret) {
		console.log("object has the key : " + str);
	} else {
		console.log('object has no key : ' + str);
	}
	return ret;
}

console.log(json.hasKey('ha'));