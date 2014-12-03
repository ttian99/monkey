function version(vers) {
    console.log("请输入版本号：");
    process.stdin.resume();
    process.stdin.on('data', function(data) {
        _version = data.toString();
        process.stdout.write("你输入的版本号为" + _version + "\n");
    });
  console.log('"请选择渠道:[1]移动MM [2]乐人 [3]腾讯 [4]联通 [5]掌乐 [6]应用宝 [7]以上所有渠道."');
  process.stdin.resume();
  process.stdin.on('data',function(data){
    var channel = parseInt(data);
    var arr = new Array();
    arr = ['cmcc','leren','tencent','cucc','zhangle','yingyongbao','All'];
    if (channel < 1 || channel > 7 ) { 
        console.log("输入错误,请输入大于0且小于8的整数");
    } else if (channel > 0 && channel <= 6) {
        var i = channel -1
        var part = arr[i];
        console.log("你选择的渠道为： " + channel + arr[i] +"\n");
        //console.log(vers,arr[i]);
        process.argv.splice(2,1,vers);
        process.argv.splice(3,1,part);
        setTimeout(second(),1000);
    } else if (channel = 7) {
        for (var i=0 ; i<6 ; i++){
            var part = arr[i];
            console.log('你选择打包全部渠道');
            a = process.argv.splice(2,1,vers);
            b = process.argv.splice(3,1,part);
            setTimeout(second(),90000);
        }
    } else {
        consol.log('即将退出');
    }
    process.stdin.end();
  });    
}
version();