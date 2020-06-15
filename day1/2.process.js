// process 进程 设置环境变量
/**
 * 在命令行配置NODE_ENV,mac export/windows set export NODE_ENV=dev
 * 如果代码放到服务器上,那就没有此环境变量,取不到可以走上线环境
 */
// console.log(process);
// console.log(process.env.NODE_ENV);

// let url = ''
// if(process.env.NODE_ENV==='development'){
//   url = 'http://localhost:3000'
// }else {
//   url = 'http://www.baidu.com'
// }

// 异步的,在当前队列的底部
process.nextTick(function(){
  console.log(this,'nextTick');
})
// console.log(url);

// 第二个队列中的
setImmediate(function(){
  // this指向自己
  console.log(this,'setImmediate');
})
setTimeout((...arr)=> {
  // this指向的是timeout自己,改成箭头函数
  console.log(this,'settimeout');
  console.log(arr.length);
}, 110, 'helo')

// setinterval作用:阻止node进程退出，就可以在调式控制台点开对象
setInterval(()=>{})