/* parent.js */
var fs = require('fs');
var x;
fs.exists('./parent.js', function (exists) {
  exists ? go1() :go2();
  
});
function go1(){
   console.log("1");
}
function go2(){
   console.log('2');
}