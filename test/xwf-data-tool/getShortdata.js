var fs = require('fs');
var psql = require('./psql.js');

var arr = ['长源村', '福光村', '福林村', '塘朗村', '塘朗小学', '田寮村', '杨屋村' ];
var words = arr[0];
var sqlStr = "select houseaddress from room where houseaddress like '"+ words + "%'";

psql(sqlStr, function(err, data) {
  const jsonStr = JSON.stringify(data);
  console.log('data = ' + jsonStr);

  var dst = './' + words + '.json';
  outFile(jsonStr, dst);
});


function outFile(jsonStr, dst, cb) {
  fs.writeFile(dst, jsonStr, 'utf-8', function(err, data) {
    if (err) {
      console.log(err);
      cb && cb(err, data);
      return;
    }
    console.log("-- file have writeFile at " + dst);
    cb && cb(null, data);
  });
}