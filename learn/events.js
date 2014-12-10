
//----------------小狗的例子-------------------------------------------------
var events=require("events");
var dog=new events.EventEmitter();
function bark(){
console.log("wang wang!!!");
}
dog.addListener("RingRing",bark);  
dog.emit("RingRing");  


//----------------
// 用于发射事件的信号
emitter.emit('event',[arg1],[arg2],[...]);
// 添加一个事件监听,只有受到事件的信号才会执行
emitter.on(event,listener)
emitter.addListener(event,listener);
//移除事件监听
emitter.removeListener(event,listener);
emitter.removeAllListener([event]);
emitter.listener