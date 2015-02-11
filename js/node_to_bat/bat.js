var fs = require('fs-extra');
var pro = require('child_process').execFile;
var exec = require('child_process').exec;

function bat() {
    process.execFile('D:/svn/star/tools/jscompile_res_to_android.bat', {
        cwd: 'D:/svn/star/tools'
    }, function(err, stdout, stderr) {
        console.log(error);
        console.log(stdout);
    });
}

exports.bat = bat;