//isNaN(numValue) 其中必选项 numvalue 参数为要检查是否为 NAN 的值
//如果值是 NaN， 那么 isNaN 函数返回 true ，否则返回 false
process.stdin.resume();
process.stdin.on('data', function(data) {
        var x =isNaN(data);
        //输出判断后的布尔值
        console.log(x); 
        // 输出结果
        process.stdout.write(data + "\n");
});