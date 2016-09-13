var fs = require('fs');
var fsr = require('./lib/fs-read.js');
var psql = require('./psql.js');
var _ = require('lodash');
var cfg = null;
var async = require('async');
// var arr = ['长源村', '福光村', '福林村', '塘朗村', '塘朗小学', '田寮村', '杨屋村'];
// var words = arr[0];
// var sqlStr = "select houseaddress from room where houseaddress like '" + words + "%'";


var isSearch = false;


// 判断文件路径是否存在
function checkOutDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

// // 读取project.json配置文件
fsr('./project.json', function(err, data) {
  if (err) console.log(err);
  cfg = data;
  // 初始化默认编码
  var initAreaCode = require('./lib/area-code-def.js');
  initAreaCode(cfg);
  // 检测文件夹是否存在
  checkOutDir(cfg.v2sDir);
  // 输出表格名数组
  var sheetArr = cfg.outArr;
  // getData(sheetArr);
  // _.map(sheetArr, function(item, id) {
  //   main(item);
  // });
  main();
});

function main(sheetName) {
  console.log('--------- main ---------');
  var words = "白芒村";
  var fullObj = {};
  // var code = cfg
  // var sqlStr = "select houseaddress from room where houseaddress like '" + words + "%'";
  async.waterfall(
    [
      function(callback) {
        psqlReq(words, function(err, data) {
          // 记录原始数据
          var jsonStr = JSON.stringify(data);
          var dst = cfg.v2sDir + "402-00001-oral" + cfg.extName;
          outFile(jsonStr, dst, function() {
            callback(null, data);
          });
        });
      },
      function(oralArr, callback) {
        getKeyArr(words, oralArr, function(err, data) {
          var jsonStr = JSON.stringify(data);
          var dst = cfg.v2sDir + "402-00001-key" + cfg.extName;
          // 记录关键字数组
          outFile(jsonStr, dst, function() {
            var keyArr = data;
            callback(null, oralArr, keyArr);
          });
        });
      },

      function(oralArr, keyArr, callback) {
        var keyObj = {};
        var keyLen = keyArr.length;
        console.log('-- keyLen = ' + keyLen);
        _.map(keyArr, function(item, id) {
          getBuildingArr(item, oralArr, function(err, data){
            keyObj[item] = data;
          });

          if (id === keyLen - 1) {
            var jsonStr = JSON.stringify(keyObj);
            var dst = cfg.v2sDir + '402-00001-' + words + '-buildArr' + cfg.extName;
            outFile(jsonStr, dst, function() {
              callback(null, oralArr, keyObj);
              console.log('------ over1 ------');
            });
          };
        });
      },
      // function(oralArr, keyObj, callback) {

      // }
    ],
    function(err, result) {
      console.log('------ over ------');
    });
}

// psql请求
function psqlReq(words, cb) {
  var sqlStr = "select * from room where houseaddress like '" + words + "%'";
  psql(sqlStr, cb);
  // psql(sqlStr, function(err, data) {
  //   var jsonStr = JSON.stringify(data);
  //   // console.log('data = ' + jsonStr);

  //   // var dst = './' + words + '.json';
  //   // var dst = cfg.v2sDir + '402-00001' + cfg.extName; 
  //   // outFile(jsonStr, dst);
  //   cb && cb(err, data);
  // });
}

// 写入数据到文件
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

// 获取关键字词组
function getKeyArr(words, arr, cb) {
  var tmp = [];
  _.map(arr, function(item, id) {
    var str = item['houseaddress'];
    // 去掉多余的空格
    str = _.trim(str);
    var strArr = str.split('');
    // log.debug("strArr = ", JSON.stringify(strArr));
    // 找到数字开始的位置
    var startPos = _.findIndex(strArr, function(item) {
      var aa = /^[0-9]*$/.exec(item);
      return aa;
    });
    // 提取数字前面部分的字符串
    var match = _.slice(strArr, 0, startPos);
    var goodStr = match.join("");
    tmp.push(goodStr);

    // log.debug('goodStr = ', goodStr);

    if (id === arr.length - 1) {
      // 数组去重
      tmp = _.uniq(tmp);
      cb(null, tmp);
    }
  });
}


function getBuildingArr(key, arr, cb) {
  var tmp = [];
  _.map(arr, function(item, id) {
    var str = item['houseaddress'];
    var reg = new RegExp(key, 'g');
    if (!reg.test(str)) {
      // console.log('no');
    } else {
      str = _.trim(str); // 去掉多余的空格
      var strArr = str.split('');
      var startPos = _.findIndex(strArr, function(item) {
        var aa = /^[0-9]*$/.exec(item);
        return aa;
      });

      var endPos = _.findLastIndex(strArr, function(item) {
        var bb = /[^A-Za-z0-9]$/.exec(item);
        return bb;
      });

      var mPos = strArr.length - endPos - 1;

      var match = _.drop(strArr, startPos);
      match = _.dropRight(match, mPos);
      var goodStr = match.join("");
      // tmp.push({name: goodStr});
      tmp.push(goodStr);
    }

    if (id === arr.length - 1) {
      // 数组去重
      tmp = _.uniq(tmp);
      cb && cb(null, tmp);
    }
  });
}

// function getBuildingKey() {

// }