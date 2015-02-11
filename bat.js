var child_process = require('child_process');

var fs = require('fs-extra');
var exec = require('child_process').exec;

// 进行js的加密运算
function buildjsc(cb) {
    fs.removeSync("./assets/src");
    fs.removeSync("./assets/res");
    console.log('remove assets/src assets/src over---------------------');
    fs.copySync("../star/res", "./assets/res");
    console.log('copySync over=================');
    buildjsc = exec('python cocos2d.py jscompile -s ../ -d ../../proj.android/assets', {
        cwd: '../star/tools/'
    });
    buildjsc.stdout.on('data', function(data) {
        console.log('jscompile输出：' + data);
    });
    buildjsc.on('exit', function(err, stdout, stderr) {
        if (err !== null)
            console.log(err);
        console.log("jscompile完成—————————————————————————————————————————————！！！");
        cb();
    });
}

