process.stdin.resume();
process.stdin.on('data', function(data) {
    var number;
    try {
        // 将输入数据解析为整型
        number = parseInt(data.toString(), 10);
        // +1
        //number += 1;
        // 输出结果
        process.stdout.write("您输入的数字为" + number + "\n");
    } catch(err) {
        process.stderr.write(err.message + "\n");
    }
});

