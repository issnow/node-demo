/**
 * 每个文件都有局部作用域,this不是global,每个js文件就是一个模块(闭包)
 */
let a = 1
console.log(this.a);
console.log(global.a);

/**
 * 全局变量,可以不声明直接使用
 * console.info/error/warn/time/timeEnd
 * process 进程 设置环境变量
 * buffer 缓存区
 * clearImediate setImediate
 * clearTimeout
 */
// console.log(global);

