// 如果是自己写的文件 需要./,可以省略js,json,node后缀,  如果是npm包,则直接使用
//  require是同步,如果是异步,一般会有回调函数
// require具有缓存功能,多次引用只执行一次
const {Dialog} = require('./dialog')
const {fn} = require('./calc')
console.log(fn(1,2,3,4,5)) 
// const d = new Dialog()
// console.log(Dialog.title());
// setTimeout(()=>{
//   d.hide()
// },d.time)