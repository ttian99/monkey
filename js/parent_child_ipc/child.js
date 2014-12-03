/* child.js */
process.on('message',function(msg) {
	console.log(msg.hello);
	msg.hello = 0;
	process.send(msg);
})
main();
function main(a,b){
	a=process.argv[3];
    b=process.argv[2];
	ver=a;
    pa=b;
    console.log(ver);
    console.log(pa);
}